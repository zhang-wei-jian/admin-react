import React, { useState, useEffect } from 'react'
import { Card, Input, Space, Button, Select, Table, Tag, Pagination, Spin } from 'antd';
import { usePage } from '@/Hooks/usePage'
import TablePageComponent from '@/Hooks/TablePageComponent'

import { reqHospitalList } from "@/api/hospitalListApi";
import type { Data, Content } from "@/api/hospitalListApi";
import type { ColumnsType } from 'antd/es/table';
import type { DataType } from "@/pages/hospital/hospitalSet/typeScript";
export default function HospitalList() {

  const { pageNo, setPageNo, pageSize, setPageSize, total, setTotal, loading, setLoading } = usePage()
  const [hospatilList, setHospatilList] = useState<Content[]>([])

  const getHospitalList = async (page = pageNo, limit = pageSize) => {
    // 获取列表
    const { content, totalElements, size } = await reqHospitalList(page, limit)
    // 设置列表数组
    setHospatilList(content)
    // 修改总页数
    setTotal(totalElements)
    // 修改每页多少
    setPageSize(size)
    // 修改loading状态
    setLoading(false)
  }

  const columns = [
    {
      title: '序号',
      dataIndex: 'hoscode',
      key: 'hoscode',

    },
    {
      title: '医院LOGO',
      key: 'age',
      render: (row: any, sb: any, sbv: any) => {
        return (
          <>
            {/* <img src={row.logoData} alt="" /> */}
            <img src={`data:image/png;base64,${row.logoData}`} width={'100pxx'} alt="" />
          </>
        )

      }
    },
    {
      title: '医院名称',
      dataIndex: 'hosname',
      key: 'hosname',
    },
    {
      title: '等级',
      dataIndex: 'hostype',
      key: 'hostype',
    },
    {
      title: '详细地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '状态',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '操作',
      key: 'tags',
      dataIndex: 'tags',
      render: (row: any, sb: any, sbv: any) => {
        return (
          <>
            <Button>你好</Button>

          </>
        )

      }
    },

  ];


  useEffect(() => {
    getHospitalList()
  }, [])
  return (
    <>
      <Card title=" 医院设置" extra={<a href="#">More</a>} style={{ width: 1000 }}>

        <Space >
          <Select defaultValue="请选者省" style={{ width: 120 }}></Select>
          <Select defaultValue="请选者市" style={{ width: 120 }}></Select>
          <Select defaultValue="请选者区" style={{ width: 120 }}></Select>
          <Select defaultValue="医院编号" style={{ width: 120 }}></Select>
          <Select defaultValue="医院类型" style={{ width: 120 }}></Select>
          <Select defaultValue="医院状态" style={{ width: 120 }}></Select>
          <Button type="primary">添加</Button>
          <Button >批量删除</Button>

        </Space>
        <p></p>

        <Space></Space>


        <Spin spinning={loading}>
          <TablePageComponent
            columns={columns}
            dataSource={hospatilList}
            total={total}



          ></TablePageComponent>
        </Spin>

      </Card>

    </>
  )
}
