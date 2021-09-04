import SvgIconStyle from '../../components/SvgIconStyle';

// const getIcon = (name: string) => (
//   <SvgIconStyle
//     src={`/static/icons/navbar/${name}.svg`}
//     // sx={{ width: 22, height: 22 }}
//   />
// );

const ICONS = {
  // page: getIcon('ic_page'),
  // dashboard: getIcon('ic_dashboard')
};

const sidebarConfig = [
  {
    subheader: 'general',
    items: [
      {
        title: 'Page One',
        href: '/',
        // href: PATH_DASHBOARD.general.pageOne,
        icon: ICONS.page
      },
      {
        title: 'Page Two',
        // href: PATH_DASHBOARD.general.pageTwo,
        href: '/',
        icon: ICONS.page
      },
      {
        title: 'Page Three',
        // href: PATH_DASHBOARD.general.pageThree,
        href: '/',
        icon: ICONS.page
      }
    ]
  },

  // APP
  // ----------------------------------------------------------------------
  {
    subheader: 'app',
    items: [
      {
        title: 'Drop',
        // href: PATH_DASHBOARD.app.root,
        href: '/',
        // icon: ICONS.dashboard,
        icon: '',
        items: [
          {
            title: 'page Four',
            // href: PATH_DASHBOARD.app.pageFour
            href: '/',
          },
          {
            title: 'Page Five',
            // href: PATH_DASHBOARD.app.pageFive
            href: '/',
          },
          {
            title: 'Page Six',
            // href: PATH_DASHBOARD.app.pageSix
            href: '/',
          }
        ]
      }
    ]
  }
];

export default sidebarConfig;
