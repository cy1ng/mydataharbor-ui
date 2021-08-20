import React, { useState } from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Home from './pages/Home'
import logo from './logo.svg';
import './App.less';

const { Header, Sider, Content } = Layout;

const App = props => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((pre) => !pre)
  }

  return <div className="app-wrap">
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
            </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
            </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: onToggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/home" component={Home}></Route>
          </Switch>
        </Content>x
      </Layout>
    </Layout>
  </div>
}

export default App;
