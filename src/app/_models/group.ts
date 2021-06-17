export interface Group {
  Id: number,
  OrganizationId: number,
  Name: string,
  // 資料建立時間
  // example: 2012-12-12 12:12:12
  CreateDateTime: string;
  CreateUser: string;
  UpdateDateTime: string;
  UpdateUser: string;
  ValidFlag: boolean;
}
