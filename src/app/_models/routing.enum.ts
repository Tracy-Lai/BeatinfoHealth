export enum Routing {

  Home = '',

  Organizations = 'organizations',

  Management = 'management',
  Users = 'users',
  User_Show = 'users/:userId',
  Admins = 'admins',
  Groups = 'groups',

  Activitys = 'activitys',
}

export const RoutingBreadcrumb: any[] = [
  {
    routing: 'Home',
    text: '首頁',
    link: '',
  },
  {
    routing: 'Organizations',
    text: '組織',
    link: 'organizations',
  },
  {
    routing: 'Management',
    text: '管理',
    link: 'management',
  },
  {
    routing: 'Users',
    text: '使用者',
    link: 'users',
  },
  {
    routing: 'User_Show',
    text: '明細',
    link: ':userId',
  },
  {
    routing: 'Admins',
    text: '管理員',
    link: 'admins',
  },
  {
    routing: 'Groups',
    text: '群組',
    link: 'groups',
  },
  {
    routing: 'Activity',
    text: '生理資訊',
    link: 'activitys',
  },
];

