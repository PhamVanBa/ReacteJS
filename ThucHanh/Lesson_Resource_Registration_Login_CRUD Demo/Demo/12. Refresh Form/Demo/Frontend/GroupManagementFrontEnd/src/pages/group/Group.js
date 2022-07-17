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
import { selectListGroup, selectPage, selectSize, selectSortField, selectSortType, selectTotalElement } from '../../redux/selectors/groupSelector';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import filterFactory, { customFilter } from 'react-bootstrap-table2-filter';
import CustomSearch from './CustomSearch';
import * as Icon from "react-feather";
import { useState } from "react";
import Filter from "./CustomFilter";

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