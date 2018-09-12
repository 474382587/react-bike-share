import React from 'react'
import { Card, Table } from 'antd'
import Axios from './../../../axios'
export default class BasicTable extends React.Component {
  state = { dynamicData: null }

  // get mock data from Easy Mock
  request = () => {
    Axios.ajax({
      url: '/table/list',
      data: {
        params: {
          page: 1
        }
      }
    }).then(res => {
      if (res.code === 0) {
        this.setState({ dynamicData: res.result })
      }
    })
  }

  componentDidMount() {
    this.request()
    const data = [
      {
        id: 0,
        userName: 'Joseph',
        gender: 'Male',
        status: 'Single',
        birthday: '1994-02-05',
        address: '6222 Broadway, Burnaby BC'
      },
      {
        id: 1,
        userName: 'Yarn',
        gender: 'Male',
        status: 'Single',
        birthday: '2004-06-18',
        address: '6222 Broadway, Burnaby BC'
      },
      {
        id: 2,
        userName: 'React',
        gender: 'Female',
        status: 'Married',
        birthday: '1985-05-02',
        address: '6222 Broadway, Burnaby BC'
      },
      {
        id: 3,
        userName: 'Bob',
        gender: 'Male',
        status: 'Single',
        birthday: '1966-11-18',
        address: '6222 Broadway, Burnaby BC'
      }
    ]
    this.setState({ dataSource: data })
  }
  onRowClick = (record, index) => {
    let selectKey = [index + 1]
    this.setState({ selectedRowKeys: selectKey, selectedItem: record })
  }
  render() {
    const columns = [
      { title: 'ID', dataIndex: 'id' },
      { title: 'User Name', dataIndex: 'userName' },
      { title: 'Gender', dataIndex: 'gender' },
      { title: 'Status', dataIndex: 'status' },
      { title: 'Birthday', dataIndex: 'birthday' },
      { title: 'Address', dataIndex: 'address' }
    ]
    const selectedRowKeys = this.state.selectedRowKeys
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys,

      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({ selectedRowKeys, selectedRows })
      }
    }
    return (
      <div>
        <Card title="Basic Table" className="card-wrap">
          <Table
            rowKey={e => e.id}
            bordered
            pagination={false}
            dataSource={this.state.dataSource}
            columns={columns}
          />
        </Card>
        <Card
          title="Table with dynamic data from Easy Mock"
          className="card-wrap"
        >
          <Table
            rowKey={e => e.id}
            bordered
            pagination={false}
            dataSource={this.state.dynamicData}
            columns={columns}
          />
        </Card>
        <Card title="Table with Radio Button" className="card-wrap">
          <Table
            rowSelection={{ type: 'radio', selectedRowKeys: selectedRowKeys }}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index)
                },
                onMouseEnter: () => {}
              }
            }}
            rowKey={e => e.id}
            bordered
            pagination={false}
            dataSource={this.state.dynamicData}
            columns={columns}
          />
        </Card>
        <Card title="Table with Checkbox" className="card-wrap">
          <Table
            rowSelection={rowCheckSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index)
                },
                onMouseEnter: () => {}
              }
            }}
            rowKey={e => e.id}
            bordered
            pagination={false}
            dataSource={this.state.dynamicData}
            columns={columns}
          />
        </Card>

        <Card title="Table with Pagination" className="card-wrap">
          <Table
            rowKey={e => e.id}
            bordered
            pagination={true}
            dataSource={this.state.dynamicData}
            columns={columns}
          />
        </Card>
      </div>
    )
  }
}
