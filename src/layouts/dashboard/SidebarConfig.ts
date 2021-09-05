const sidebarConfig = [
  {
    subheader: 'yuri-bunker',
    items: [
      {
        title: '导入',
        href: '/import',
        icon: '',
        items: [
          {
            title: '列表',
            // href: PATH_DASHBOARD.app.pageFour
            href: '/import/list',
          }
        ]
      },
      {
        title: '分析',
        href: '/normalize',
        // href: PATH_DASHBOARD.general.pageOne,
        // icon: ICONS.page
        icon: '',
        items: [
          {
            title: '列表',
            // href: PATH_DASHBOARD.app.pageFour
            href: '/normalize/list',
          }
        ]
      },
      {
        title: '发布',
        href: '/publish',
        // href: PATH_DASHBOARD.general.pageOne,
        // icon: ICONS.page
        icon: '',
        items: [
          {
            title: '列表',
            // href: PATH_DASHBOARD.app.pageFour
            href: '/publish/list',
          }
        ]
      },
      {
        title: '日志',
        href: '/logs',
        // href: PATH_DASHBOARD.general.pageOne,
        // icon: ICONS.page
        icon: '',
        items: [
          {
            title: '列表',
            // href: PATH_DASHBOARD.app.pageFour
            href: '/logs/list',
          }
        ]
      }
    ]
  }
];

export default sidebarConfig;

// const sidebarConfig = [
//   {
//     subheader: '导入',
//     items: [
//       {
//         title: '列表',
//         href: '/import',
//         icon: ''
//       }
//     ]
//   },
//   {
//     subheader: '分析',
//     items: [
//       {
//         title: '列表',
//         href: '/normalize',
//         icon: '',
//         items: [
//           {
//             title: 'page Four',
//             href: '',
//           },
//           {
//             title: 'Page Five',
//             href: '',
//           },
//           {
//             title: 'Page Six',
//             href: '',
//           }
//         ]
//       }
//     ]
//   },
//   {
//     subheader: '发布',
//     items: [
//       {
//         title: '列表',
//         href: '/publish',
//         icon: ''
//       }
//     ]
//   },
//   {
//     subheader: '日志',
//     items: [
//       {
//         title: '列表',
//         href: '/logs',
//         icon: ''
//       }
//     ]
//   },
// ];

// export default sidebarConfig;