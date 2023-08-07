import styles from "./Heading.module.css";

const headingStyles = {
  h1: {
    tag: "h1",
    className: `${styles.heading} ${styles.head1}`,
  },
  h2: {
    tag: "h2",
    className: `${styles.heading} ${styles.head2}`,
  },
  h3: {
    tag: "h3",
    className: `${styles.heading} ${styles.head3}`,
  },
};

function Heading({ as = "h1", children }) {
  const { tag: Tag, className } = headingStyles[as] || headingStyles["h1"];

  return <Tag className={className}>{children}</Tag>;
}

export default Heading;
