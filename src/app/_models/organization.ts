export interface Organization {
  Id: string;
  ServiceId: string;
  Name: string;
  // 資料建立時間
  // example: 2012-12-12 12:12:12
  CreateDateTime: string;
  CreateUser: string;
  UpdateDateTime: string;
  UpdateUser: string;
  ValidFlag: boolean;
}
