import React from 'react';
import { Layout, Row, Col, Input } from 'antd';
import style from './index.less';
const { Content, Header, Footer } = Layout;
export default class MyHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Header className={style.header}>
          <Row>
            <Col span={5} offset={2}>
              Chaobi999 最全炒币导航网站
            </Col>
            <Col span={5}>2</Col>
            <Col span={5}>3</Col>
            <Col span={5}>4</Col>
          </Row>
          <Row>
            <Col span={4} offset={3}>
              <div>baidu</div>
            </Col>
            <Col span={14}>
              <Input width="540" />
            </Col>
          </Row>
        </Header>
      </Layout>
    );
  }
}
