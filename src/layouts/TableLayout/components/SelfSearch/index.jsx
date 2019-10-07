import React, { Component, useState } from 'react';
import { Form, Input, Icon } from '@alifd/next';
import styles from './index.module.scss';

const FormItem = Form.Item;
export default function SelfSearch(props) {
  const [searchState, setSearchState] = useState(false);
  const { searchList } = props;
  const handleSubmit = v => {
    console.log(v);
  };
  const changeSearch = () => {
    setSearchState(!searchState);
  };

  return (
    <div
      className={styles.SelfSearch}
      style={{ maxHeight: searchState && '300px' }}
    >
      {searchList.length && (
        <Form labelAlign="left" inline>
          {searchList.map((item, index) => {
            return (
              <FormItem
                style={{ width: '200px' }}
                size="small"
                label={item.label}
                key={index}
              >
                <Input name={item.model} placeholder={item.placeholder} />
              </FormItem>
            );
          })}
          <FormItem size="small">
            <Form.Submit
              type="primary"
              className={styles.submit}
              onClick={handleSubmit}
            >
              查询
            </Form.Submit>
          </FormItem>
        </Form>
      )}
      <div className={styles.down} onClick={changeSearch}>
        <Icon
          size="xs"
          type={searchState ? 'arrow-up' : 'arrow-down'}
          role="button"
          aria-label="icon arrow-up"
          style={{ margin: '6px' }}
        />
      </div>
    </div>
  );
}
