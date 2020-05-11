import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./InputForm.module.scss";

const InputForm = ({
  inputType,
  placeholder,
  autoComplete,
  onChange,
  onSubmit,
  submitText,
  validateInput,
  label
}) => {
  const [inputValue, setInputValue] = useState("");
  const isValid = validateInput(inputValue);
  const handleOnChange = e => {
    e.preventDefault();
    onChange(e.target.value);
    setInputValue(e.target.value);
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(inputValue);
      setInputValue("");
    }

  };

  return (
    <form className={styles.root} onSubmit={handleOnSubmit}>
      {label && <label>{label}</label>}
      <input
        type={inputType}
        onChange={handleOnChange}
        placeholder={placeholder}
        value={inputValue}
        autoComplete={autoComplete}
      />
      {onSubmit && isValid && (
        <input
          className={styles.submit}
          type="submit"
          value={submitText}
          disabled={!isValid}
        />
      )}
    </form>
  );
};

InputForm.defaultProps = {
  inputType: "text",
  placeholder: "",
  autoComplete: "off",
  onChange: () => {},
  submitText: "Submit",
  validateInput: () => true,
  label: ""
};

InputForm.propTypes = {
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.oneOf(["on", "off"]),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  submitText: PropTypes.string,
  validateInput: PropTypes.func,
  label: PropTypes.string
};

export default InputForm;
