import request from "@/utils/http/request";
import { type } from "os";

const APIs = {
  reqHospitalSetList: '/admin/hosp/hospitalSet',
  search: '/admin/hosp/hospitalSet/get',
  add: '/admin/hosp/hospitalSet/save',
}
export const reqHospitalSetList = (page: number, limit: number, hosname?: string, hoscode?: string) => {
  // 请求医院设置的列表
  return request.get<any, HospatiSetlList>(`${APIs.reqHospitalSetList}/${page}/${limit}`,
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
  return request.get<any, Data>(`${APIs.search}/${id}`)
}

export const reqAddHospital = (data: Pick<addType, 'apiUrl' | 'contactsName' | 'contactsPhone' | 'hoscode' | 'hosname'>) => {
  // 用id查询医院
  return request.get<any, Data>(`${APIs.add}`, {
    data: {
      ...data
    }
  })
}









//////////////////////////////////////////////////
// 获取医院设置列表的 


export interface HospatiSetlList {
  current: number;
  hitCount: boolean;
  orders: any[];
  pages: number;
  records: Record[];
  searchCount: boolean;
  size: number;
  total: number;
}

export interface Record {
  apiUrl: string;
  contactsName: string;
  contactsPhone: string;
  createTime: string;
  hoscode: string;
  hosname: string;
  id: number;
  isDeleted: number;
  param: { [key: string]: any };
  signKey: string;
  status: number;
  updateTime: string;
}
///////////////////////医院查询


export interface Data {
  apiUrl: string;
  contactsName: string;
  contactsPhone: string;
  createTime: string;
  hoscode: string;
  hosname: string;
  id: number;
  isDeleted: number;
  param: { [key: string]: any };
  signKey: string;
  status: number;
  updateTime: string;
}
///////////////////////添加
type addType = {
  "apiUrl": string,
  "contactsName": string,
  "contactsPhone": string,
  "createTime": string,
  "hoscode": string,
  "hosname": string,
  "id": number,
  "isDeleted": number,
  "param": {},
  "signKey": string,
  "status": number,
  "updateTime": string
}
