import request from "@/utils/http/request";

const APIs = {
  reqHospitalSetList: '/admin/hosp/hospitalSet',
  search: '/admin/hosp/hospitalSet/get'
}
export const reqHospitalSetList = (page: number, limit: number, hosname?: string, hoscode?: string) => {
  // 请求医院设置的列表
  return request.get<any>(`${APIs.reqHospitalSetList}/${page}/${limit}`,
    {
      params: {
        hosname: hosname,
        hoscode: hoscode
      }
    }
  )
}
export const reqSearchHospital = (id: number) => {
  // 用id查询医院
  return request.get<any>(`${APIs.search}/${id}`)
}
//////////////////////////////////////////////////
// 获取医院设置列表的 
