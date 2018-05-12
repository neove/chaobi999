import React from 'react';
import { Layout, Card, Row, Col, Avatar } from 'antd';
const { Content, Header, Footer } = Layout;
const { Meta } = Card;
import {exchange} from '../../../data';
import style from './index.less';
import Exchange from './exchange'
import Media from './media'
export default class MyContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Content className={style.content}>
            <Exchange />
            <Media />
        </Content>
      </Layout>
    );
  }
}
