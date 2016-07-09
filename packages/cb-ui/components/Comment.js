import React, { PropTypes } from 'react';
import * as styles from './styles.css';

function SelfComment({ value, icon }) {
  return (
    <div className={styles.SelfCommentSet}>
      <div className={styles.SelfComment}>
        {value}
        <span className={styles.SelfArrow}></span>
      </div>
      <div className={icon} />
    </div>
  );
}

function OtherComment({ value, icon }) {
  return (
    <div className={styles.OtherCommentSet}>
      <div className={icon} />
      <div className={styles.OtherComment}>
        {value}
        <span className={styles.OtherArrow}></span>
      </div>
    </div>
  );
}

export default function Comment({ value, other, sex }) {
  const icon = sex === 'female' ? styles.FemaleIcon : styles.MaleIcon;

  return (
    <div className={styles.CommentLine}>
      {other ?
        <OtherComment value={value} icon={icon} /> :
        <SelfComment value={value} icon={icon} />
      }
    </div>
  );
}
Comment.propTypes = {
  value: PropTypes.string,
  other: PropTypes.bool,
  sex: PropTypes.oneOf(['female', 'male'])
};
