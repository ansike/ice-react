import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Checkbox, Grid, Form, Message } from '@alifd/next';
import SelfHeader from './components/SelfHeader';
import SelfSearch from './components/SelfSearch';
import SelfTable from './components/SelfTable';
import styles from './index.module.scss';

export default class SelfTableLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      crumbs: [
        {
          title: '课程卡片',
          path: '/course'
        },
        {
          title: '备课',
          path: ''
        }
      ],
      searchList: [
        {
          type: 'input',
          model: 'studentPhone',
          label: '手机号',
          placeholder: '请输入学生手机号'
        },
        {
          type: 'input',
          model: 'studentName',
          label: '学生姓名',
          placeholder: '请输入学生姓名'
        },
        {
          type: 'input',
          model: 'zybUid',
          label: '学生UID',
          placeholder: '请输入学生UID'
        },
        {
          type: 'input',
          model: 'studentPhone',
          label: '手机号',
          placeholder: '请输入学生手机号'
        },
        {
          type: 'input',
          model: 'studentName',
          label: '学生姓名',
          placeholder: '请输入学生姓名'
        },
        {
          type: 'input',
          model: 'zybUid',
          label: '学生UID',
          placeholder: '请输入学生UID'
        },
        {
          type: 'input',
          model: 'studentPhone',
          label: '手机号',
          placeholder: '请输入学生手机号'
        },
        {
          type: 'input',
          model: 'studentName',
          label: '学生姓名',
          placeholder: '请输入学生姓名'
        },
        {
          type: 'input',
          model: 'zybUid',
          label: '学生UID',
          placeholder: '请输入学生UID'
        }
      ]
    };
  }
  numChange(val) {
    this.setState({ num: val });
    console.log('parent', val);
  }
  render() {
    const { crumbs, searchList, num } = this.state;
    return (
      <div className={styles.SelfTableLayout}>
        <SelfHeader
          crumbs={crumbs || []}
          num={num}
          onNumberChange={this.numChange.bind(this)}
        />
        <SelfSearch searchList={searchList || []} />
        <SelfTable />
      </div>
    );
  }
}
