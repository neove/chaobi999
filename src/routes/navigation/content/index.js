import React from 'react';
import { Layout, Card, Row, Col, Avatar } from 'antd';
const { Content, Header, Footer } = Layout;
const { Meta } = Card;
import { exchange } from '../../../data';
import style from './index.less';
import Exchange from './exchange';
import Media from './media';
import Investor from './investor/index';
import Wallet from './wallet/index';
import SelfMedia from './selfMedia/index';
import Side1 from './side/side1';
export default class MyContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Content className={style.content}>
          <Row>
            <Col span={17}>
              <Exchange />
              <Media />
              <Investor />
              <Wallet />
              <SelfMedia />
            </Col>
              <Col span={7}>
                <Side1 />
                <Side1 />
              </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
