import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { usePage } from '@/Hooks/usePage'
import { Card, Input, Space, Button, Table, Tag, } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { reqHospitalSetList } from "@/api/hospitalApi";
import type { Record } from "@/api/hospitalApi";
import type { ColumnsType } from 'antd/es/table';
                                                                                                               
export default function HospitalSet() {
  const { pageNo, pageSize, total } = usePage()
  const [hospatiSetlList, setHospatiSetlList] = useState<Record[]>([])


  const getHospitalSetList = async (page = pageNo, limit = pageSize) => {
    const { records } = await reqHospitalSetList(page, limit)
    setHospatiSetlList(records)
  }


  const columns = [
    {
      title: '序号',
      dataIndex: 'hoscode',
      key: 'hoscode',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: '医院名称',
      dataIndex: 'hosname',
      key: 'hosname',
    },
    {
      title: '医院编号',
      dataIndex: 'hoscode',
      key: 'hoscode',
    },
    {
      title: 'api基础路径',
      key: 'apiUrl',
      dataIndex: 'apiUrl',

    },

    {
      title: '签名',
      dataIndex: 'signKey',
      key: 'signKey',
    },
    {
      title: '联系人姓名',
      dataIndex: 'contactsName',
      key: 'contactsName',
    },
    {
      title: '联系人手机号',
      dataIndex: 'contactsPhone',
      key: 'contactsPhone',
    },


    {
      title: '操作',
      key: 'apiUrl',

      // render: (_, { tags }) => (
      //   <>
      //     {tags.map((tag) => {
      //       let color = tag.length > 5 ? 'geekblue' : 'green';
      //       if (tag === 'loser') {
      //         color = 'volcano';
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
      render: (row: Record, record: any, index: any) => (
        <>
          <Button icon={<EditOutlined />}></Button>
          <Button danger></Button>
        </>
      ),
    },






  ];

  const goAdd = () => {
    // navigate('/hospital/hospitalSet/add')
  }
  useEffect(() => {
    getHospitalSetList()

  }, [])
  return (
    <>
      <Card title=" 医院设置" extra={<a href="#">More</a>} >
        <Space >
          <Input.Group compact>
            <Input placeholder="输入医院名称" style={{ width: '20%' }} ></Input>
            <Input placeholder="医院编号" style={{ width: '20%' }} ></Input>
            <Button type="primary">查询</Button>
            <Button>清空</Button>
          </Input.Group>
        </Space>
        <p></p>
        <Button onClick={goAdd} type="primary">添加</Button>
        <Button>批量删除</Button>
        <Table columns={columns} dataSource={hospatiSetlList} />
      </Card>

    </>
  )

}
