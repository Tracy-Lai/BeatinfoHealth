export interface Admin {
  Id: number,
  Code: string,
  Name: string,
  Type: string,
  // 資料建立時間
  // example: 2012-12-12 12:12:12
  CreateDateTime: string;
  CreateUser: string;
  UpdateDateTime: string;
  UpdateUser: string;
  ValidFlag: boolean;
}
