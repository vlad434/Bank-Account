const LabeledInput = ({
  label = "",
  inputType = "text",
  inputValue,
  onChange,
  placeholder = "",
}) => {
  return (
    <div>
      {label && <label htmlFor={"id_" + label}>{label}</label>}
      <input
        id={"id_" + label}
        type={inputType}
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LabeledInput;
