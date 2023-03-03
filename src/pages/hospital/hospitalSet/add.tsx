import React, { useState, useCallback } from 'react'

import { Card, Form, Input, Space, Button, Table, Tag, Pagination, Spin } from 'antd';
import { reqAddHospital } from '@/api/hospitalApi'
import { useNavigate } from 'react-router-dom';
export default function Add() {
  const navigate = useNavigate()
  const [hospatilName, setHospatilName] = useState('')
  const [hospatilId, setHospatilId] = useState('')
  const [hospatilPath, setHospatilPath] = useState('')
  // const [hospatilApi, setHospatilApi] = useState('')
  const [useName, setUseName] = useState('')
  const [usePhone, setUsePhone] = useState('')
  // const nameChangeHandle = useCallback((value) => {
  //   console.log(value.nativeEvent.data);

  // }, [])
  // const nameChangeHandle = (name: any) => {
  //   return (e: any) => {

  //     console.log('执行了', e.target.value);
  //   }
  // }
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
