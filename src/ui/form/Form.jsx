import styles from "./Form.module.css";

const Form = ({ type, children, submit }) => {
  return (
    <form
      onSubmit={submit}
      className={`form ${
        type !== "modal" ? styles["default-form"] : styles["modal-form"]
      }`}>
      {children}
    </form>
  );
};

export default Form;
