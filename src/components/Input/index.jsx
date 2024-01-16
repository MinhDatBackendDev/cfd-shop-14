import React, { forwardRef } from "react";

const Input = (
  { label, required, error, renderInput = undefined, name = "", ...inputProps },
  ref
) => {
  return (
    <div className="form-group">
      <label className="label">
        {label}
        {required && <span> *</span>}
      </label>
      {renderInput?.({ ...inputProps, ref: ref }) || (
        <input
          type="text"
          className={`form-control ${!!error ? "input-error" : ""}`}
          name={name}
          id={name}
          ref={ref}
          {...inputProps}
        />
      )}
      {error && <p className="form-error">{error || ""}</p>}
    </div>
  );
};

export default forwardRef(Input);
