// import { Card, Input, Space, Button, Table, Tag, Pagination, Spin } from 'antd';
// import { useState } from "react"
// import { usePage } from '@/Hooks/usePage'
// export default function TablePageComponent(props: any) {

//   const { pageNo, pageSize } = usePage()
//   const {
//     total,
//     columns,
//     // 每一行
//     dataSource,
//     // data表格
//     onUpData,
//     // 要触发的更新事件
//     spinning
//     // 加载状态
//   } = props

//   // const [pageNo, setPageNo] = useState(1)
//   // const [pageSize, setPageSize] = useState(5)
//   // const [total, setTotal] = useState(0)

//   const onChangeHandle = (page: number, pageSize: number) => {
//     onUpData(page, pageSize)
//   }


//   return (
//     <>
//       <Spin spinning={spinning}>


//         <Table columns={columns} dataSource={dataSource} rowKey={'id'} />
//         <p></p>
//         <Pagination
//           total={total}
//           current={pageNo}
//           pageSize={pageSize}
//           onChange={onChangeHandle}
//           defaultCurrent={1}
//           defaultPageSize={5}
//           // over
//           showSizeChanger
//           showQuickJumper
//           showTotal={total => `Total ${total} items`}
//         />
//       </Spin>
//     </>
//   )
// }

////////////////////////////////////////////////////////
import { Card, Input, Space, Button, Table, Tag, Pagination, Spin } from 'antd';
import { useState } from "react"
import { usePage } from '@/Hooks/usePage'

function withTablePage(Component: any, opction?: any) {
  return function WrappedComponent(props: any) {
    const { pageNo, pageSize } = usePage();
    const [spinning, setSpinning] = useState(false);

    const onUpData = (page: number, size: number) => {
      setSpinning(true);
      props.onUpData(page, size).finally(() => {
        setSpinning(false);
      });
    };

    return (
      <Spin spinning={spinning}>
        <Component
          {...props}
          pageNo={pageNo}
          pageSize={pageSize}
          onUpData={onUpData}
        />
      </Spin>
    );
  };
}

function TablePageComponent(props: any) {

  const {
    pageNo, pageSize, total, columns, dataSource, } = props;

  const onChangeHandle = (page: number, pageSize: number) => {
    props.onUpData(page, pageSize);
  };

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
  );
}

export default withTablePage(TablePageComponent);
export { withTablePage }
// 这里实现了一个高阶组件 withTablePage，
// 接收一个组件作为参数，返回一个新的包裹过的组件，实现了复用的目的。在这个高阶组件中，
// 使用了 useState Hook 来管理 Spin 组件的加载状态，同时传递 usePage Hook 中获取到的分页参数 
// pageNo 和 pageSize 以及 onUpData 方法到原组件中，原组件只需要接收 props 进行渲染即可。



