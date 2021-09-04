import React from 'react';
import { Menu, Grid } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint()
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a href="">Home</a>
      </Menu.Item>
      {/* <SubMenu key="sub1" title={<span>clothes</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
  </SubMenu> */}
      <Menu.Item key="sub1">
        <a href="" className="active">Clothes</a>
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="">Shoes</a>
      </Menu.Item>
      <Menu.Item key="">
        <a href="">Accessories</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
