export default function LabeledInput({
  label = "",
  inputType = "text",
  inputValue,
  onChange,
  placeholder = "",
}) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={inputType}
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
