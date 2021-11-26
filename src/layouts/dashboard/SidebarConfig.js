import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'aduan',
    path: '/aduan/list',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'pelapor',
    path: '/pelapor',
    icon: getIcon(peopleFill)
  },
  {
    title: 'lembaga',
    path: '/lembaga',
    icon: getIcon(peopleFill)
  },
  {
    title: 'roles',
    path: '/roles',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'logout',
    path: '/logout',
    icon: getIcon(lockFill)
  }
];

export default sidebarConfig;
