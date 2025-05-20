const SelectInput = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} id={"id_" + value}>
      <option value="USD">US Dollar</option>
      <option value="EUR">Euro</option>
      <option value="GBP">British Pound</option>
    </select>
  );
};

export default SelectInput;
