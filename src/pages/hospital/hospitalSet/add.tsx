import React, { useState, useCallback, useEffect } from 'react'

import { Card, Form, Input, Space, Button, Table, Tag, Pagination, Spin } from 'antd';
import { reqAddHospital } from '@/api/hospitalApi'
import { useLocation, useNavigate } from 'react-router-dom';
import type { Record } from "@/api/hospitalApi";
export default function Add() {
  const location = useLocation()
  const [row, setRow] = useState<Record>(location.state as Record)
  const navigate = useNavigate()
  // 下面是数据绑定的表单
  const [hospatilName, setHospatilName] = useState('')
  const [hospatilId, setHospatilId] = useState('')
  const [hospatilPath, setHospatilPath] = useState('')
  // const [hospatilApi, setHospatilApi] = useState('')
  const [useName, setUseName] = useState('')
  const [usePhone, setUsePhone] = useState('')

  console.log(location.state);


  const submit = () => {
    // 保存发送
    reqAddHospital({
      'apiUrl': hospatilPath,
      'contactsName': useName,
      'contactsPhone': usePhone,
      'hoscode': hospatilId,
      'hosname': hospatilName
    })
  }
  useEffect(() => {
    // 如果携带了state，就给表单写上去
    if (row) {
      setHospatilName(row.hosname)
      setHospatilId(row.hoscode)
      setHospatilPath(row.apiUrl)
      setUseName(row.contactsName)
      setUsePhone(row.contactsPhone)
    }
  }, [])
  return (
    <>

      <Card>

        <Form
          labelCol={{ span: 2 }}
        >
          <Form.Item label="医院名称">
            <Input value={hospatilName} onChange={(event: any) => { setHospatilName(event.target.value) }}></Input>
          </Form.Item  >
          <Form.Item label="医院编号" >
            <Input value={hospatilId} onChange={(event: any) => { setHospatilId(event.target.value) }}></Input>
          </Form.Item>
          <Form.Item label="api基础路径">
            <Input value={hospatilPath} onChange={(event: any) => { setHospatilPath(event.target.value) }}></Input>
          </Form.Item>
          <Form.Item label="联系人姓名">
            <Input value={useName} onChange={(event: any) => { setUseName(event.target.value) }}></Input>
          </Form.Item>
          <Form.Item label="联系人手机号">
            <Input value={usePhone} onChange={(event: any) => { setUsePhone(event.target.value) }}></Input>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 2 }}>
            <Button type="primary" onClick={submit}>保存</Button>

            <Button onClick={() => { navigate(-1) }} className='maring' style={{ 'marginLeft': '10px' }} >返回</Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}
