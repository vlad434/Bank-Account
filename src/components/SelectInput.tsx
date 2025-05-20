export default function SelectInput({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="USD">US Dollar</option>
      <option value="EUR">Euro</option>
      <option value="GBP">British Pound</option>
    </select>
  );
}
