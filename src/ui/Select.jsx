const Select = ({ options, value, onChange, ...props }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border-none bg-colorGrey2 p-[15px] outline-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="p-[10px]">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
