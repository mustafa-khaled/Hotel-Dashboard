import SpinnerMini from "../spinnerMini/SpinnerMini";

function TableLoading({ loading, columns }) {
  return (
    <>
      {loading && (
        <tbody>
          <tr>
            <td colSpan={columns?.length}>
              <SpinnerMini />
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
}

export default TableLoading;
