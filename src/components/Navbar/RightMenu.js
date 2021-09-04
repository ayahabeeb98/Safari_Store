import React from "react";
import { Menu, Grid } from "antd";
import Complete from "./Search";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    
    <Menu className="rightItems" mode={md ? "horizontal" : "flex"}>
      <Menu.Item key="mail">
        <a href="" className="vector">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z"
              fill="black"
            />
          </svg>
        </a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="" className="vector">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.8 12.8C11.912 12.8 11.2 13.512 11.2 14.4C11.2 14.8243 11.3686 15.2313 11.6686 15.5314C11.9687 15.8314 12.3757 16 12.8 16C13.2243 16 13.6313 15.8314 13.9314 15.5314C14.2314 15.2313 14.4 14.8243 14.4 14.4C14.4 13.9757 14.2314 13.5687 13.9314 13.2686C13.6313 12.9686 13.2243 12.8 12.8 12.8ZM0 0V1.6H1.6L4.48 7.672L3.392 9.632C3.272 9.856 3.2 10.12 3.2 10.4C3.2 10.8243 3.36857 11.2313 3.66863 11.5314C3.96869 11.8314 4.37565 12 4.8 12H14.4V10.4H5.136C5.08296 10.4 5.03209 10.3789 4.99458 10.3414C4.95707 10.3039 4.936 10.253 4.936 10.2C4.936 10.16 4.944 10.128 4.96 10.104L5.68 8.8H11.64C12.24 8.8 12.768 8.464 13.04 7.976L15.904 2.8C15.96 2.672 16 2.536 16 2.4C16 2.18783 15.9157 1.98434 15.7657 1.83431C15.6157 1.68429 15.4122 1.6 15.2 1.6H3.368L2.616 0H0ZM4.8 12.8C3.912 12.8 3.2 13.512 3.2 14.4C3.2 14.8243 3.36857 15.2313 3.66863 15.5314C3.96869 15.8314 4.37565 16 4.8 16C5.22435 16 5.63131 15.8314 5.93137 15.5314C6.23143 15.2313 6.4 14.8243 6.4 14.4C6.4 13.9757 6.23143 13.5687 5.93137 13.2686C5.63131 12.9686 5.22435 12.8 4.8 12.8Z" />
          </svg>
        </a>
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="" className="vector">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"
              fill="black"
            />
          </svg>
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
