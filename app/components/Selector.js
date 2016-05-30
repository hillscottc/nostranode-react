import React, { Component, PropTypes } from 'react'

const Selector = ({ value, onChange, options }) => (
    <div>
      <h3>{value}</h3>
      <select onChange={e => onChange(e.target.value)}
              value={value}>
        {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
        }
      </select>
    </div>
);


Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Selector;