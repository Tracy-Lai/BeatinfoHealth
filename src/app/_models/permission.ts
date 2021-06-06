import { PermissionType } from "./permission-type.enum";

export interface Permission {
  Modify: PermissionType[];
  View: PermissionType[];
}
