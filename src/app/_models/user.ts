export interface User {
  Id: number;
  UserId: number;
  // 姓名
  Name: string;
  // 行動電話
  PhoneNumber: string;
  // 電子信箱
  Mail: string;
  // 生日
  // example: 2020-07-01
  Birthday: string;
  // 性別
  // example: 0 | 1
  Gender: number;
  // 身高
  Height: number;
  // 體重
  Weight: number;
  // 緊急聯絡人
  ContactPerson: string;
  // 緊急連絡人電話
  ContactPhone: string;
  // 資料建立時間
  // example: 2012-12-12 12:12:12
  CreateDateTime: string;
  CreateUser: string;
  UpdateDateTime: string;
  UpdateUser: string;

  ValidFlag: boolean;
  /*
  // 頭像
  Avatar: string;
  LastConnectedDateTime: string;
  */
}
