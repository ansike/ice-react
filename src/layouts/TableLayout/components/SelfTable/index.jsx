import React, { Component } from 'react';
import { Table, Pagination } from '@alifd/next';

import styles from './index.module.scss';

export default function SelfTable() {
  const dataSource = () => {
    const result = [];
    for (let i = 0; i < 25; i++) {
      result.push({
        title: {
          name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
        },
        id: 100306660940 + i,
        time: 2000 + i
      });
    }
    return result;
  };

  const render = (value, index, record) => {
    return <a>Remove({record.id})</a>;
  };

  const change = function(value) {
    console.log(value);
  };
  console.log(styles);
  const data = dataSource();
  return (
    <div className={styles.SelfTable}>
      <Table dataSource={data}>
        <Table.Column title="Id" dataIndex="id" />
        <Table.Column title="Title" dataIndex="title.name" />
        <Table.Column title="Time" dataIndex="time" />
        <Table.Column cell={render} />
      </Table>
      <br />
      <Pagination
        style={{ textAlign: 'right' }}
        size="small"
        className="custom-pagination"
        total={data.length}
        // totalRender={total => `Total: ${total}`}
        onChange={change}
        defaultCurrent={0}
      />
    </div>
  );
}
