import React from 'react';
import { Layout, Card, Row, Col, Avatar, Tooltip, Rate } from 'antd';
const { Content } = Layout;
import { exchange } from '../../../data';
import style from './index.less';
export default class Exchange extends React.Component {
  constructor(props) {
    super(props);
  }
  renderContent() {
    const list = [];
    for (let i = 0; i < exchange.length; i++) {
      const index = Math.floor(i / 6);
      list[index] = list[index] || [];
      list[index].push(exchange[i]);
    }
    return list.map(curList => {
      return (
        <div className={style.row}>
          <Row>
            {curList.map(item => {
              const tipContent = (
                <div>
                  <span>{item.description}</span>
                  <Rate allowHalf value={item.rate} />
                </div>
              );
              return (
                <Col span={4}>
                  <Tooltip title={tipContent}>
                    <Avatar shape="square" src={item.icon} />
                    <a href={item.url} className={style.exchangeName} target="_blank">
                      {item.name}
                    </a>
                  </Tooltip>
                </Col>
              );
            })}
          </Row>
        </div>
      );
    });
  }
  render() {
    return (
      <Layout>
          <Row>
            <Col span={24}>
              <Card title="交易所" bordered={false} hoverable={true}>
                {this.renderContent()}
              </Card>
            </Col>
          </Row>
      </Layout>
    );
  }
}
