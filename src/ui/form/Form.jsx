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

Form.defaultProps = {
  type: "regular",
};

export default Form;
