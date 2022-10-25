import React from 'react';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
  {
    title: 'แนะนำโดยผู้จัด',
    path: '/',
    icon: <FcIcons.FcNews />,
    cName: 'nav-text'
  },
  {
    title: 'ประมวลผลข้อมูล',
    path: '/SentimentAnalysis',
    icon: <FcIcons.FcDataRecovery />,
    cName: 'nav-text'
  }
];
