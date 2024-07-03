function TableBody({ data, loading, currentItems, keyObjectData, actions }) {
  return (
    <>
      {data?.length > 0 && !loading && (
        <tbody className="bg-white">
          {currentItems?.map((row, rowIndex) => (
            <tr key={rowIndex} className={`border-gray border-b`}>
              <td
                className={`whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500`}
              >
                {rowIndex + 1}
              </td>
              {keyObjectData?.map((key, keyIndex) => {
                return keyObjectData.length - 1 === keyIndex ? (
                  <td
                    key={keyIndex}
                    className={`whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500`}
                  >
                    {actions?.(row)}
                  </td>
                ) : (
                  <td
                    key={keyIndex}
                    className={`whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500`}
                  >
                    {row[key] ? row[key] : "_"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      )}
    </>
  );
}

export default TableBody;
