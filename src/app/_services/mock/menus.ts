import { Menu } from '../../_models/menu';

export const Menus: Menu[] = [
  {
    MenuId: 1,
    Name: 'Home',
    Path: '/',
  },
];

export const MangementMenus: Menu[] = [
  // {
  //   MenuId: 1,
  //   Name: 'Home',
  //   Path: '/',
  // },
  {
    MenuId: 2,
    Name: '使用者',
    Path: '/management/users',
  },
  {
    MenuId: 3,
    Name: '管理者',
    Path: '/management/admins',
  },
  {
    MenuId: 4,
    Name: '群組',
    Path: '/management/groups',
  },
];
