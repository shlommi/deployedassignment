import React from "react";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
  error
}) => {
  return (
    <div>
      <FormGroup>
        <Label for="name">{label}</Label>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classnames("form-control", { "is-invalid": error })}
        />
        {error && <FormFeedback>{error}</FormFeedback>}
      </FormGroup>
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
