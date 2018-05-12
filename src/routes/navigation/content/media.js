import React from 'react';
import { Layout, Card, Row, Col, Avatar, Tooltip, Rate } from 'antd';
const { Content } = Layout;
import { exchange } from '../../../data';
import style from './index.less';
export default class Media extends React.Component {
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
        <Content className={style.content}>
          <Row>
            <Col span={17}>
              <Card title="媒体" bordered={false} hoverable={true}>
                {this.renderContent()}
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
