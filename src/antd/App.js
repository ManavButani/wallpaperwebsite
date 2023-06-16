import React, { useState } from "react";
import Layout from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import "./App.css";
import { GoHome } from "react-icons/go";
import { Menu, Tag } from "antd";
import { Card, Typography, Space, Divider, Row, Col, Table } from "antd";
import { FaHamburger } from "react-icons/fa";
import { faker } from "@faker-js/faker";


const App = () => {
  let [collpsed, setCollapsed] = useState(false);

  let generateData = ()=>{
    let data=[];
    for(let i=0;i<40;i++){
      data.push(
        {
          id: faker.datatype.int,
          name: faker.person.fullName(),
          email: faker.internet.email(),
          status: Math.random()> 0.5 ? true : false,
        }
      )
    }
    return data
  }

  let data_ = generateData()

  console.log(data_);
  return (
    <>
      <Layout className="container">
        <Header className="header" style={{ backgroundColor: "white" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaHamburger
              size={28}
              style={{ marginRight: 20 }}
              onClick={() => {
                setCollapsed(!collpsed);
              }}
            />
            <div className="brand">Swaminarayan</div>
          </div>
        </Header>
        <Layout>
          <Sider theme="light" collapsed={collpsed}>
            <Menu
              mode="inline"
              items={[
                {
                  label: "Home",
                  key: "Home",
                  icon: <GoHome />,
                  children: [
                    { label: "Door", key: "Door" },
                    {
                      label: "Window",
                      key: "Window",
                    },
                  ],
                },
                {
                  label: "AboutUS",
                  key: "abtus",
                },
              ]}
            />
          </Sider>
          <Content className="content" style={{ margin: "25px" }}>
            <Card>
              <Typography.Title style={{ fontSize: "25px" }}>
                Jai Swaminarayan
              </Typography.Title>
              <Typography.Paragraph>!..</Typography.Paragraph>
            </Card>

            <Divider />
            <Space direction="horizontal">
              <Card>
                <Space direction="horizontal">
                  <FaHamburger />
                  <small>Hey, Come to Surat</small>
                </Space>
                <Typography.Title>$25000</Typography.Title>
              </Card>

              <Card>
                <Space direction="horizontal">
                  <FaHamburger />
                  <small>Hey, Come to Surat</small>
                </Space>
                <Typography.Title>$25000</Typography.Title>
              </Card>

              <Card>
                <Space direction="horizontal">
                  <FaHamburger />
                  <small>Hey, Come to Surat</small>
                </Space>
                <Typography.Title>$25000</Typography.Title>
              </Card>
            </Space>

            <Divider />
            <Row gutter={30}>
              <Col span={6}>
                <Card>
                  <Typography.Title>something</Typography.Title>
                </Card>
              </Col>

              <Col span={18}>
                <Card>
                  <Typography.Title>something</Typography.Title>
                </Card>
              </Col>
            </Row>

            <Divider />

            <Table
              dataSource={data_}
              columns={[
                {
                  dataIndex: "id",
                  title: "ID",
                  key: "id_",
                },
                {
                  dataIndex: "name",
                  title: "Name",
                  key: "email_",
                },
                {
                  dataIndex: "email",
                  title: "EMAIL",
                  key: "_email_",
                },
                {
                  dataIndex: "status",
                  title: "Status",
                  key: "_status",
                  render: (val) => {
                    return val ? <Tag>Active</Tag> : <Tag>Inactive</Tag>;
                  },
                },
              ]}
            ></Table>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
