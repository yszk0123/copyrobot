import React from 'react';
import { Comment } from 'cb-ui';
import * as styles from './styles.css';

export default function Result() {
  return (
    <div className={styles.Result}>
      <Comment value="Hello, world!" />
    </div>
  );
}
