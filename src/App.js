import "./App.css";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";
import { Layout } from "antd";
import React from "react";
import HeaderNav from "./Components/Header";
import SideBar from "./Components/SideBar";
import ContentBar from "./Components/Content";
const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            background: "#ffffffff",
            boxShadow: "0px 0.3px 0.9px #00000012 0px 1.6px 3.6px #0000001c",
            borderBottom: "2px solid #E1E1E1",
          }}
          className="header__style"
        >
          <HeaderNav />
        </Header>

        <Layout className="seco__layout">
          <Sider
            className="side__bar"
            width="18%"
            collapsedWidth={1}
            style={{
              background: "#E1E1E1",
              paddingTop: "30px",
              
            }}
          >
            <SideBar />
          </Sider>
          <Content className="content__bar">
            <ContentBar />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
