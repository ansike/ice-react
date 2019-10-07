import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Checkbox, Grid, Form, Message } from '@alifd/next';
import TableLayout from '@/layouts/TableLayout';

import styles from './index.module.scss';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  numChange(val) {
    this.setState({ num: val });
    console.log('parent', val);
  }
  render() {
    return (
      <div className={styles.test}>
        <TableLayout />
      </div>
    );
  }
}
