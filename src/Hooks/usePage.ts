import { useState } from "react"
export const usePage = () => {
  // 分页
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [total, setTotal] = useState(0)
  // 加载
  const [loading, setLoading] = useState(true)
  return {
    pageNo,
    setPageNo,
    pageSize,
    setPageSize,

    total,
    setTotal

    , loading, setLoading
  }
}


// export default usePage
