import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { usePage } from '@/Hooks/usePage'
import { Card, Input, Space, Button, Table, Tag, } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { reqHospitalSetList } from "@/api/hospitalApi";
import type { Record } from "@/api/hospitalApi";
import type { ColumnsType } from 'antd/es/table';

function HospitalSet() {
  return (
    <>
      你好傻逼
    </>
  )

}
export default function WithHospitalSet(Component: any) {
  return (props: any) => {
    return (
      <>
        我该找了
        <Component {...props}>

        </Component>
      </>
    )
  }

}
