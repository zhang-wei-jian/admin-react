import request from "@/utils/http/request";


const APIs = {
  reqHospitalList: '/admin/hosp/hospital',
  reqSheng: '/admin/cmn/dict/findByDictCode',
  reqShi: '/admin/cmn/dict/findByParentId',
  reqQu: '/admin/cmn/dict/findByParentId',

}


export const reqHospitalList = (page: number, limit: number) => {
  // 请求医院设置的列表
  return request.get<any, Data>(`${APIs.reqHospitalList}/${page}/${limit}`)
}
export const reqShengList = (dictCode: string) => {
  // 荷兰省的
  return request.get<any, ShengType[]>(`${APIs.reqSheng}/${dictCode}`)
}
export const reqShiLit = (parentId: number) => {
  // 请求市区
  return request.get<any, ShiQuType[]>(`${APIs.reqShi}/${parentId}`)
}
export const reqQuList = (parentId: number) => {
  // 请求区
  return request.get<any, ShiQuType[]>(`${APIs.reqQu}/${parentId}`)
}






//////////////////////////////////////////////////
// 获取医院设置列表的 

export interface Data {
  content: Content[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: DataSort;
  totalElements: number;
  totalPages: number;
}

export interface Content {
  address: string;
  bookingRule: BookingRule;
  cityCode: string;
  createTime: string;
  districtCode: string;
  hoscode: string;
  hosname: string;
  hostype: string;
  id: string;
  intro: string;
  isDeleted: number;
  logoData: string;
  param: Param;
  provinceCode: string;
  route: string;
  status: number;
  updateTime: string;
}

export interface BookingRule {
  cycle: number;
  quitDay: number;
  quitTime: string;
  releaseTime: string;
  rule: string[];
  stopTime: string;
}

export interface Param {
  fullAddress: string;
  hostypeString: string;
}

export interface Pageable {
  offset: number;
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  sort: PageableSort;
  unpaged: boolean;
}

export interface PageableSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface DataSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
/////////////////////////省份


export interface ShengType {
  createTime: string;
  dictCode: null;
  hasChildren: boolean;
  id: number;
  isDeleted: number;
  name: string;
  param: { [key: string]: any };
  parentId: number;
  updateTime: string;
  value: string;
}

// /////////////市区



export interface ShiQuType {
  createTime: string;
  dictCode: string;
  hasChildren: boolean;
  id: number;
  isDeleted: number;
  name: string;
  param: { [key: string]: any };
  parentId: number;
  updateTime: string;
  value: string;
}
