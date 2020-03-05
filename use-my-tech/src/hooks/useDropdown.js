import React, { useState } from "react";

export const useDropdown = (label, options, defaultState) => {
  const [state, setState] = useState(defaultState);
  const id = `dropdown-${label.replace(" ", "").toLowerCase()}`;
  const dropdown = () => {
    return (
      <label htmlFor={label}>
        {label}
        <select
          id={id}
          name={id}
          value={state}
          onChange={(e) => setState(e.target.value)}
          onBlur={(e) => setState(e.target.value)}
          disabled={options.length === 0}
        >
          <option>All</option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, dropdown, setState];
};
