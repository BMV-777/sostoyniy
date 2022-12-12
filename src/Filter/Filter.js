import React from 'react';
import './Filter.modul.css';

const Filter = ({ value, onChange }) => (
  <label className="text-input">
    Фильтер по имени
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
