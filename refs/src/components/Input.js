import React, { forwardRef } from "react";

// import { Container } from './styles';

function Input({ name, label, ...props }, ref) {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>

      <input type="text" {...props} ref={ref} />
    </div>
  );
}

export default forwardRef(Input);
