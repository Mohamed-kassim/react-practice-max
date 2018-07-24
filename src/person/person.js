import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';

const Person = (props) => {
  const {click, name, age, changed} = props;
  return (
    <div
      className="Person"
      onClick={click}
      role="presentation"
    >
      <p>
      this is person 
        {name}
      and my age is 
        {age}
      </p>
      <input
        onChange={changed}
        value={name}
      />
    </div>
  );
};
Person.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Person;
