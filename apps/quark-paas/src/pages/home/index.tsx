import { Layout, Menu, Input } from "@arco-design/web-react";
import { IconApps } from "@arco-design/web-react/icon";
import "./index.less";

const Header = Layout.Header;
const Sider = Layout.Sider;
const Content = Layout.Content;

const MenuItem = Menu.Item;

const InputSearch = Input.Search;

export default function () {
  return (
    <Layout className={"home"}>
      <Sider style={{ width: "240px" }}>
        <Menu>
          <MenuItem key="0">
            <IconApps />
            主页
          </MenuItem>
          <MenuItem key="1">
            <IconApps />
            草稿箱
          </MenuItem>
          <MenuItem key="2">
            <IconApps />
            分享给我的
          </MenuItem>
          <MenuItem key="3">
            <IconApps />
            回收站
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Layout>
          <Header style={{ height: "64px" }}>
            <InputSearch
              allowClear
              placeholder="Enter keyword to search"
              style={{ width: "100%", margin: "0 16px", borderRadius: "8px" }}
            />
          </Header>
          <Content
            style={{
              backgroundColor: "#F0F1F4",
              overflow: "hidden",
              height: "100%",
            }}
          >
            Content
          </Content>
        </Layout>
        <Sider style={{ width: "240px" }}>Sider</Sider>
      </Layout>
    </Layout>
  );
}
