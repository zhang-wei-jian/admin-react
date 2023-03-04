import { Card, Input, Space, Button, Table, Tag, Pagination, Spin } from 'antd';
import { useState } from "react"
import { usePage } from '@/Hooks/usePage'
export default function TablePageComponent(props: any) {

  const { pageNo, pageSize } = usePage()
  const {
    total,
    columns,
    // 每一行
    dataSource,
    // data表格
    onUpData,
    // 要触发的更新事件
    spinning
    // 加载状态
  } = props

  // const [pageNo, setPageNo] = useState(1)
  // const [pageSize, setPageSize] = useState(5)
  // const [total, setTotal] = useState(0)

  const onChangeHandle = (page: number, pageSize: number) => {
    onUpData(page, pageSize)
  }


  return (
    <>
      <Spin spinning={spinning}>


        <Table columns={columns} dataSource={dataSource} rowKey={'id'} />
        <p></p>
        <Pagination
          total={total}
          current={pageNo}
          pageSize={pageSize}
          onChange={onChangeHandle}
          defaultCurrent={1}
          defaultPageSize={5}
          // over
          showSizeChanger
          showQuickJumper
          showTotal={total => `Total ${total} items`}
        />
      </Spin>
    </>
  )
}

