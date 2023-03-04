import React, { useState, useEffect } from 'react'
import { Card, Input, Space, Button, Select, Table, Tag, Pagination, Spin } from 'antd';
import { usePage } from '@/Hooks/usePage'
import TablePageComponent from '@/components/TablePageComponent/TablePageComponent'

import { reqHospitalList, reqShengList, reqShiLit, reqQuList } from "@/api/hospitalListApi";
import type { Data, Content, ShengType, ShiQuType } from "@/api/hospitalListApi";
import type { ColumnsType } from 'antd/es/table';
import type { DataType } from "@/pages/hospital/hospitalSet/typeScript";
export default function HospitalList() {

  const { pageNo, setPageNo, pageSize, setPageSize, total, setTotal, loading, setLoading } = usePage()
  const [hospatilList, setHospatilList] = useState<Content[]>([])
  // 下拉加载状态
  const [selectLoading, setSelectLoading] = useState(true)
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

  const [selectList1, setSelectList1] = useState<{ value: number, label: string }[]>([])
  const getSelectSheng = async () => {
    //  获取省份的下拉列表
    const res = await reqShengList('province')
    const opctionList1 = res.map(item => {
      return {
        value: item.id,
        label: item.name
      }
    })
    setSelectList1(opctionList1)
    setSelectLoading(false)
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

  const [selectList2, setSelectList2] = useState<{ value: number, label: string }[]>([])
  // select1触发了请求ocptionList2下拉列表数据
  const select1ChangeHandle = async (id: number) => {
    setSelectLoading(true)
    const res = await reqShiLit(id)
    console.log(res);

    const opctionList2 = res.map(item => {
      return {
        value: item.id,
        label: item.name
      }
    })

    setSelectList2(opctionList2)
    setSelectLoading(false)
  }
  const [selectList3, setSelectList3] = useState<{ value: number, label: string }[]>([])
  // select1触发了请求ocptionList2下拉列表数据
  const select2ChangeHandle = async (id: number) => {
    setSelectLoading(true)
    const res = await reqQuList(id)
    const opctionList3 = res.map(item => {
      return {
        value: item.id,
        label: item.name
      }
    })

    setSelectList3(opctionList3)
    setSelectLoading(false)
  }
  useEffect(() => {
    // 请求表格
    getHospitalList()
    // 请求
    getSelectSheng()
  }, [])
  return (
    <>
      <Card title=" 医院设置" extra={<a href="#">More</a>} style={{ width: 1000 }}
      >

        <Space >
          <Spin spinning={selectLoading}>

            <Select placeholder="请选者省" style={{ width: 120 }} options={selectList1} onChange={select1ChangeHandle}> </Select>
            <Select placeholder="请选者市" style={{ width: 120 }} options={selectList2} onChange={select2ChangeHandle}></Select>
            <Select placeholder="请选者区" style={{ width: 120 }} options={selectList3}></Select>
            <Select placeholder="医院名称" style={{ width: 120 }}></Select>
            <Select placeholder="医院编号" style={{ width: 120 }}></Select>
            <Select placeholder="医院类型" style={{ width: 120 }}></Select>
            <Select placeholder="医院状态" style={{ width: 120 }}></Select>
          </Spin>



          <Button type="primary">添加</Button>
          <Button >批量删除</Button>

        </Space>
        <p></p>

        <Space></Space>



        <TablePageComponent
          columns={columns}
          dataSource={hospatilList}
          total={total}
          spinning={loading}
          onUpData={getHospitalList}


        ></TablePageComponent>


      </Card>

    </>
  )
}
