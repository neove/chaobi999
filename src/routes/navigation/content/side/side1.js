import React from 'react';
import { Layout, Card, Row, Col, Avatar, Tooltip, Rate } from 'antd';
const { Content } = Layout;
import { exchange } from '../../../../data';
import style from '../index.less';
export default class Side1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderContent() {
    const list = [];
    return 111;
  }
  render() {
    return (
      <Layout>
        <Content className={style.sideContent}>
          <Row>
            <Col span={24}>
              <Card title="交易方法" bordered={false} hoverable={true}>
                {this.renderContent()}
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
