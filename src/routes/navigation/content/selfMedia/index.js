import React from 'react';
import { Layout, Card, Row, Col, Avatar, Tooltip, Rate } from 'antd';
const { Content } = Layout;
import { exchange } from '../../../../data';
import style from '../index.less';
export default class SelfMedia extends React.Component {
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
        <Content className={style.leftContent}>
          <Row>
            <Col span={24}>
              <Card title="自媒体" bordered={false} hoverable={true}>
                {this.renderContent()}
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
