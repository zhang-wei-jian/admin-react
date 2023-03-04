import React, { useState, useEffect, MouseEventHandler } from 'react'
import TablePageComponent from '@/components/TablePageComponent/TablePageComponent'

import { useNavigate } from 'react-router-dom';
import { usePage } from '@/Hooks/usePage'
import { Card, Form, Input, Space, Button, Table, Tag, Pagination, Spin } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { reqHospitalSetList, reqSearchHospital } from "@/api/hospitalApi";
import type { Record } from "@/api/hospitalApi";
import type { ColumnsType } from 'antd/es/table';
import type { DataType } from "./typeScript";
export default function HospitalSet() {
  const navigate = useNavigate()

  const { pageNo, setPageNo, pageSize, setPageSize, total, setTotal, loading, setLoading } = usePage()


  // 请求列表
  const [hospatiSetlList, setHospatiSetlList] = useState<Record[]>([])
  const getHospitalSetList = async (page = pageNo, limit = pageSize, hsName?: string, hsId?: string) => {
    const { records, total, size, current } = await reqHospitalSetList(page, limit, hsName, hsId)
    setHospatiSetlList(records)
    // 修改总页数
    setTotal(total)
    // 修改每页多少
    setPageSize(size)
    setPageNo(current)
    setLoading(false)
  }

  // 列表格
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
      key: Date.now(),
      render: (row: Record, record: any, index: any) => (
        <>
          <Button onClick={(e) => { editHandle(e, row) }} icon={<EditOutlined />} ></Button>
          <Button danger icon={<DeleteOutlined />}></Button>
        </>
      ),
    },


  ];

  const goAdd = (e: any) => {
    navigate('/syt/hospital/hospitalSet/add')

  }
  const InputOnChange = () => {
    // console.log(e);
    navigate('/hospital/hospitalSet/add')

  }
  const editHandle = (e: any, row: Record) => {

    navigate('/syt/hospital/hospitalSet/add', {
      state: row
    }

    )
    // return (row?: any) => {
    //   console.log(row);




    // }
  }



  const [hospatilId, sethospatilId] = useState()
  const [form] = Form.useForm()
  const goSearchHandle = () => {

    const { hospatilName, id } = form.getFieldsValue()
    getHospitalSetList(pageNo, pageSize, hospatilName, id)
  }
  const clearForm = () => {

    form.setFieldsValue({ hospatilName: '', id: '' })


  }


  useEffect(() => {
    getHospitalSetList()
    // setLoading(false)
    return () => {
      // console.log('useEffect的return的函数就是卸载执行的');
    }
  }, [])
  return (
    <>


      <Card title=" 医院设置" extra={<a href="#">More</a>} >
        <Space >
          <Form form={form} >
            <Input.Group compact>
              <Form.Item name="hospatilName">
                <Input placeholder="输入医院名称" style={{}} ></Input>
              </Form.Item>

              <Form.Item name="id">
                <Input placeholder="医院编号" style={{}} ></Input>
              </Form.Item  >
              <Button type="primary" onClick={goSearchHandle} >查询</Button>
              <Button onClick={clearForm}>清空</Button>
            </Input.Group>
          </Form>
        </Space>
        <p></p>
        <Button onClick={goAdd} type="primary">添加</Button>
        <Button>批量删除</Button>
        <Spin spinning={loading}>
          <Table columns={columns} dataSource={hospatiSetlList} rowKey={'id'} />
          <p></p>
          <Pagination
            total={85}
            showSizeChanger
            showQuickJumper
            showTotal={total => `Total ${total} items`}
          />
        </Spin>
      </Card>


    </>
  )

}
