import React, { Component, useState } from 'react';
import { Breadcrumb, Button } from '@alifd/next';

import styles from './index.module.scss';
export default function SelfHeaer(props) {
  const [num, setNume] = useState(props.num);
  const onClick = e => {
    console.log(e);
    setNume(num + 1);
    props.onNumberChange(num);
  };

  return (
    <div className={styles.SelfHeaer}>
      {props.crumbs.length && (
        <Breadcrumb separator="/">
          {props.crumbs.map((item,index) => {
            return <Breadcrumb.Item key={index} link={item.path}>{item.title}</Breadcrumb.Item>;
          })}
        </Breadcrumb>
      )}
      <Button size="small" type="primary">
        增加
      </Button>
    </div>
  );
}
