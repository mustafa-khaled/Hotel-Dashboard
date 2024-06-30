import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/heading/Heading";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "var(--color-grey-50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4.8rem",
      }}>
      <div
        style={{
          backgroundColor: "var(--color-grey-0)",
          border: "1px solid var(--color-grey-100)",
          borderRadius: "var(--border-radius-md)",

          padding: "4.8rem",
          flex: "0 1 96rem",
          textAlign: "center",
        }}>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
