import Home from '../pages/Home'
import Cluster from '../pages/Cluster'
import Plugin from '../pages/Plugin'
import Task from '../pages/Task'
import {
  HomeFilled,
  PieChartFilled,
  SignalFilled,
  HddFilled,
} from '@ant-design/icons';
export const RouterConfig = [
  {
    title: '首页',
    key: 'home',
    component: Home,
    icon: HomeFilled
  },
  {
    title: '集群管理',
    key: 'cluster',
    component: Cluster,
    icon: PieChartFilled
  },
  {
    title: '插件仓库',
    key: 'plugin',
    component: Plugin,
    icon: SignalFilled
  },
  {
    title: '任务管理',
    key: 'task',
    component: Task,
    icon: HddFilled
  },
]