import React, { useState, useCallback, useEffect } from 'react'

import { Card, Form, Input, Space, Button, Table, Tag, Pagination, Spin } from 'antd';
import { reqCheck } from '@/api/hospitalListApi'
import { useLocation, useNavigate } from 'react-router-dom';
import type { Record } from "@/api/hospitalApi";
export default function Add() {


  const location = useLocation()
  const [row, setRow] = useState<Record>(location.state as Record)
  // const navigate = useNavigate()
  // 下面是数据绑定的表单


  const getCheckHospitai = async () => {
    const res = await reqCheck(1)

  }
  useEffect(() => {
    getCheckHospitai()
    console.log(location.state);

  }, [])
  return (
    <>

      <Card>

        你好啊我是插卡可能
      </Card>
    </>
  )
}
