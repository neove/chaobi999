import React from 'react';
import MyHeader from './header';
import MyContent from './content';
import MyFooter from './footer';
export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <MyHeader />
        <MyContent />
        <MyFooter />
      </div>
    );
  }
}
