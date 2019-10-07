import React from 'react';
import Logo from '../Logo';

import styles from './index.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        {/* <Logo /> */}
      </div>
      <div className={styles.copyright}>
        © 2019 Theme designed by{' '}
        <a
          href="https://baidu.com"
          target="_blank"
          className={styles.copyrightLink}
          rel="noopener noreferrer"
        >
          ZYB-wxst
        </a>
      </div>
    </div>
  );
}
