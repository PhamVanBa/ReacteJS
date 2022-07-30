import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { getListGroupAction } from '../../redux/actions/groupActions';
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { selectListGroup, selectPage, selectSize, selectSortField, selectSortType, selectTotalElement } from '../../redux/selectors/groupSelector';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import filterFactory, { customFilter } from 'react-bootstrap-table2-filter';
import CustomSearch from './CustomSearch';
import * as Icon from "react-feather";
import Filter from "./CustomFilter";
import { ReactstrapInput } from "reactstrap-formik";
import GroupApi from '../../api/GroupApi';
import { Formik, FastField, Form } from 'formik';
import * as Yup from 'yup';
import { toastr } from "react-redux-toastr";

const Group = (props) => {

  const getListGroups = props.getListGroupAction;
  const size = props.size;

  // filter
  const [isVisibleFilter, setVisibleFilter] = useState(false);
  let onTotalMemberFilter;

  useEffect(() => {
    getListGroups(1, size);
  }, [getListGroups, size]);

  const tableColumns = [
    {
      dataField: "name",
      text: "Name",
      sort: true
    },
    {
      dataField: "totalMember",
      text: "Total Member",
      sort: true,
      filter: customFilter(),
      filterRenderer: (onFilter, column) => {
        onTotalMemberFilter = onFilter;
        return null;
      }
    }
  ];

  const handleTableChange = (type, { page, sizePerPage, sortField, sortOrder, searchText, filters }) => {
    const filter = filters && filters.totalMember && filters.totalMember.filterVal ? filters.totalMember.filterVal : null;
    const minTotalMember = filter && filter.minTotalMember ? filter.minTotalMember : null;
    const maxTotalMember = filter && filter.maxTotalMember ? filter.maxTotalMember : null;
    getListGroups(page, sizePerPage, sortField, sortOrder, searchText, minTotalMember, maxTotalMember);
  }

  const onFilterChange = (minTotalMember, maxTotalMember) => {
    onTotalMemberFilter({
      minTotalMember,
      maxTotalMember
    });
  }

  const refreshForm = () => {
    handleTableChange(
      null,
      {
        page: 1,
        sizePerPage: size,
        sortField: null,
        sortOrder: null,
        searchText: "",
        filters: {
          totalMember: null
        }
      }
    );
  }

  // create
  const [isOpenModal, setOpenModal] = useState(false);

  const showSuccessNotification = (title, message) => {
    const options = {
      timeOut: 2500,
      showCloseButton: false,
      progressBar: false,
      position: "top-right"
    };

    // show notification
    toastr.success(title, message, options);
  }

  return (
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Group Management</h1>
      <Card>
        <ToolkitProvider
          keyField="name"
          data={props.groups}
          columns={tableColumns}
          search
        >
          {
            toolkitprops => (
              <div>
                <CardBody>
                  <Row>
                    <Col>
                      {isVisibleFilter && <Filter onFilterChange={onFilterChange} />}
                    </Col>
                  </Row>
                  <Row style={{ alignItems: "flex-end" }}>
                    <Col xs="9">
                      <CustomSearch {...toolkitprops.searchProps} />
                    </Col>
                    <Col xs="3" style={{ paddingBottom: 20 }}>
                      <div className="float-right pull-right">
                        {/* filter button */}
                        <Icon.Filter size="24" className="align-middle mr-2" onClick={() => setVisibleFilter(!isVisibleFilter)} />
                        <Icon.RefreshCcw size="24" className="align-middle mr-2" onClick={() => refreshForm()} />
                        <Icon.PlusCircle size="24" className="align-middle mr-2" onClick={() => setOpenModal(true)} />
                      </div>
                    </Col>
                  </Row>
                  <BootstrapTable
                    {...toolkitprops.baseProps}
                    bootstrap4
                    striped
                    hover
                    bordered
                    remote
                    sort={{
                      dataField: props.sortField,
                      order: props.sortType
                    }}
                    pagination={paginationFactory({
                      page: props.page,
                      totalSize: props.totalElement,
                      sizePerPage: props.size,

                      nextPageText: '>',
                      prePageText: '<',
                      withFirstAndLast: false,
                      alwaysShowAllBtns: true,

                      hideSizePerPage: true,

                    })}
                    filter={filterFactory()}
                    onTableChange={handleTableChange}
                  />
                </CardBody>
              </div>
            )
          }
        </ToolkitProvider>

      </Card>

      <Modal
        isOpen={isOpenModal}
      >
        <Formik
          initialValues={
            {
              name: ''
            }
          }
          validationSchema={
            Yup.object({
              name: Yup.string()
                .required('Required')
                .max(50, 'Must be between 6 to 50 characters')
                .min(6, 'Must be between 6 to 50 characters')
                .test('checkUniqueName', 'This name is already exists.', async name => {
                  // call api
                  const isExists = await GroupApi.existsByName(name);
                  return !isExists;
                })
            })
          }
          onSubmit={
            async (values) => {
              try {
                // call api
                await GroupApi.create(values.name);
                setOpenModal(false);
                // show notification
                showSuccessNotification(
                  "Create Group",
                  "Create Group Successfully!");
                // reload group page
                refreshForm();

              } catch (error) {
                console.log(error);
                setOpenModal(false);
              }
            }
          }
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* header */}
              <ModalHeader>
                Create Group
              </ModalHeader>

              {/* body */}
              <ModalBody className="m-3">

                {/* Firstname */}
                <Row style={{ alignItems: "center" }}>
                  <Col xs="auto">
                    Group Name:
                    </Col>
                  <Col>
                    <FastField
                      //label="Group Name"
                      bsSize="lg"
                      type="text"
                      name="name"
                      placeholder="Enter Group Name"
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>
              </ModalBody>

              {/* footer */}
              <ModalFooter>
                {/* resend */}
                <Button
                  color="primary"
                  style={{ marginLeft: 10 }}
                  disabled={isSubmitting}
                  type="submit"
                >
                  Save
                </Button>

                {/* close button */}
                <Button
                  color="primary"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>

    </Container >
  )
};

const mapGlobalStateToProps = state => {
  return {
    groups: selectListGroup(state),
    page: selectPage(state),
    size: selectSize(state),
    totalElement: selectTotalElement(state),
    sortField: selectSortField(state),
    sortType: selectSortType(state)
  };
};

export default connect(mapGlobalStateToProps, { getListGroupAction })(Group);