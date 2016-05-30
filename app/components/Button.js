import React, { Component, PropTypes } from 'react'
import styles from './Button.css';


const Button = ({ value, onClick }) => (
    <div className={styles.normal}>
      <button type="button"
              onClick={e => onClick(e.target.value)}
              value={value}>
        {value}
      </button>
    </div>
);


Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};


export default Button;