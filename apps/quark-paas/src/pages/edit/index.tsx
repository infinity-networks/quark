import "./index.less";
import {
  Avatar,
  Dropdown,
  Layout,
  Link,
  Menu,
  ResizeBox,
  Space,
} from "@arco-design/web-react";
import { IconGithub, IconNotification } from "@arco-design/web-react/icon";

const Header = Layout.Header;
const Sider = Layout.Sider;
const Content = Layout.Content;

export default function () {
  return (
    <Layout className="edit">
      <Header className="header">
        <Space>
          <Dropdown>
            <svg
              width="20"
              height="20"
              style={{ margin: "16px" }}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.5 5L5 5L5 2.5L2.5 2.5L2.5 5ZM5 11.25L2.5 11.25L2.5 8.75L5 8.75L5 11.25ZM17.5 11.25L15 11.25L15 8.75L17.5 8.75L17.5 11.25ZM8.75 11.25L11.25 11.25L11.25 8.75L8.75 8.75L8.75 11.25ZM5 17.5L2.5 17.5L2.5 15L5 15L5 17.5ZM15 17.5L17.5 17.5L17.5 15L15 15L15 17.5ZM11.25 17.5L8.75 17.5L8.75 15L11.25 15L11.25 17.5ZM17.5 5L15 5L15 2.5L17.5 2.5L17.5 5ZM8.75 5L11.25 5L11.25 2.5L8.75 2.5L8.75 5Z"
                fill="currentColor"
              ></path>
            </svg>
          </Dropdown>
        </Space>
        <Space>
          <Link>
            <IconGithub style={{ fontSize: 20, margin: 8 }} />
          </Link>
          <Dropdown>
            <IconNotification style={{ fontSize: 20, margin: 8 }} />
          </Dropdown>
          <Dropdown
            droplist={
              <Menu>
                <Menu.Item key="0">11</Menu.Item>
              </Menu>
            }
          >
            <Avatar
              style={{ backgroundColor: "#3370ff", margin: "8px 16px 8px 8px" }}
            >
              <img
                alt="avatar"
                src="https://avatars.githubusercontent.com/u/38871019?v=4"
              />
            </Avatar>
          </Dropdown>
        </Space>
      </Header>
      <Layout>
        <Sider style={{ width: "64px" }}></Sider>
        <Sider
          resizeDirections={["right"]}
          style={{ minWidth: 150, maxWidth: 500 }}
        >
          Explorer
        </Sider>
        <Layout>
          <Content
            style={{
              backgroundColor: "#F0F1F4",
              overflow: "hidden",
              height: "100%",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                zIndex: -1,
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "300px",
                  background: "red",
                }}
              ></div>
            </div>
            <ResizeBox.Split
              direction="vertical"
              style={{ height: "100%", zIndex: 10000 }}
              panes={[, <div style={{ minHeight: "48px" }}>逻辑</div>]}
            ></ResizeBox.Split>
          </Content>
          <Sider>检视器</Sider>
        </Layout>
      </Layout>
    </Layout>
  );
}
