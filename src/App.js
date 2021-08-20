import React, { useState } from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Home from './pages/Home'
import logo from './logo.svg';
import { RouterConfig } from "./utils/config";
import './App.scss';

const { Header, Sider, Content } = Layout;
const MenuItem = Menu.Item

const App = props => {
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState([])

  const onToggle = () => {
    setCollapsed((pre) => !pre)
  }

  const onMenuChange = (key) => {

  }

  const genMenuItem = () => {
    return RouterConfig.map((item) => {
      const { title, key, component, icon: Icon} = item
      return <MenuItem key={key} icon={<Icon />}>
        {title}
      </MenuItem>
    })
  }

  return <div className="app-wrap">
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={onMenuChange}>
          {genMenuItem()}
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
        </Content>
      </Layout>
    </Layout>
  </div>
}

export default App;
