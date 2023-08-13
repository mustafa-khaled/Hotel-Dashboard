import styles from "./Select.module.css";

const Select = ({ options, value, onChange, ...props }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`${styles.select} ${
        props?.type === "white" ? styles.white : ""
      }`}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.lapel}
        </option>
      ))}
    </select>
  );
};

export default Select;
