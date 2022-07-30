import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row
} from "reactstrap";
import { getListGroupAction } from '../../redux/actions/groupActions';
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { selectListGroup, selectPage, selectSize, selectTotalElement } from '../../redux/selectors/groupSelector';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import filterFactory from 'react-bootstrap-table2-filter';
import CustomSearch from './CustomSearch';

const Group = (props) => {

  const getListGroups = props.getListGroupAction;
  const size = props.size;

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
      sort: true
    }
  ];

  const handleTableChange = (type, { page, sizePerPage, sortField, sortOrder, searchText }) => {
    getListGroups(page, sizePerPage, sortField, sortOrder, searchText);
  }

  return (
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Group Management</h1>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <ToolkitProvider
                keyField="name"
                data={props.groups}
                columns={tableColumns}
                search
              >
                {
                  toolkitprops => [
                    <CustomSearch {...toolkitprops.searchProps} />,

                    <BootstrapTable
                      {...toolkitprops.baseProps}
                      bootstrap4
                      striped
                      hover
                      bordered
                      remote
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
                  ]
                }
              </ToolkitProvider>
            </CardBody>
          </Card>
        </Col>
      </Row >
    </Container >
  )
};

const mapGlobalStateToProps = state => {
  return {
    groups: selectListGroup(state),
    page: selectPage(state),
    size: selectSize(state),
    totalElement: selectTotalElement(state)
  };
};

export default connect(mapGlobalStateToProps, { getListGroupAction })(Group);