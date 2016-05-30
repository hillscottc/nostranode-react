import React, { PropTypes } from 'react'
import styles from './Nostra.css';


const Nostra = ({ fortune, onClick }) => (
    <div className={styles.normal}>
      <div>{fortune}</div>
      <br/>
      <button type="button" onClick={onClick} >
        Get Fortune
      </button>
    </div>
);


Nostra.propTypes = {
  fortune: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Nostra.defaultProps = {
  fortune: "Lucky.",
  onClick: () => {console.log("Click.")}
};


export default Nostra;