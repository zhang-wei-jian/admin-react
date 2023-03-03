import { useState } from "react"
export default function Input() {

  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [total, setTotal] = useState(0)


  // const nameChangeHandle = useCallback((value) => {
  //   console.log(value.nativeEvent.data);

  // }, [])

  return (
    <div>
      你好世界
    </div>
  )
}


// export default useTablePage
