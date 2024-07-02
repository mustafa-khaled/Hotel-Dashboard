import Button from "../Button";
import Heading from "../heading/Heading";
import styles from "./ErrorFallback.module.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className={styles["error-fallback"]}>
      <div className={styles.box}>
        <Heading>Something Went Wrong</Heading>
        <p>{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try Again
        </Button>
      </div>
    </main>
  );
}

export default ErrorFallback;
