import { Card, Input, Space, Button, Table, Tag, Pagination } from 'antd';
import { useState } from "react"
import { usePage } from '@/Hooks/usePage'
export default function TablePageComponent(props: any) {

  const { pageNo, pageSize, total } = usePage()
  const { columns, dataSource, onUpData } = props

  // const [pageNo, setPageNo] = useState(1)
  // const [pageSize, setPageSize] = useState(5)
  // const [total, setTotal] = useState(0)

  const onChangeHandle = (page: number, pageSize: number) => {
    onUpData(page, pageSize)
  }


  return (
    <>
      <Table columns={columns} dataSource={dataSource} rowKey={'id'} />
      <p></p>
      <Pagination
        total={total}
        current={pageNo}
        pageSize={pageSize}
        onChange={onChangeHandle}
        defaultCurrent={1}
        defaultPageSize={5}


        showSizeChanger
        showQuickJumper
        showTotal={total => `Total ${total} items`}
      />
    </>
  )
}

