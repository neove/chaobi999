import React from 'react'
import { Layout } from 'antd';
const { Content, Header, Footer } = Layout;
export default class MyFooter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Layout>
            <Footer/>
        </Layout>
    }
}