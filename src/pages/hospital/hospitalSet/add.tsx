import React from 'react'
import { Card, Input, Space, Button, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { DataType } from "./typeScript";

export default function index() {

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];


  return (
    <>
      <Card title=" 医院设置" extra={<a href="#">More</a>} style={{ width: 1000 }}>

        <Space >
          <Input.Group compact>

            <Input placeholder="输入医院名称" style={{ width: '20%' }} ></Input>
            <Input placeholder="医院编号" style={{ width: '20%' }} ></Input>
            <Button type="primary">查询</Button>
            <Button>清空</Button>
          </Input.Group>
        </Space>
        <p></p>
        <Button type="primary">添加</Button>
        <Button>批量删除</Button>
        <Table columns={columns} dataSource={data} />

      </Card>






    </>
  )

}
