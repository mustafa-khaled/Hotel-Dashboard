import { useTranslation } from "react-i18next";

function TableHead({ columns }) {
  const [t] = useTranslation();

  return (
    <thead className={`text-dark bg-[#BCD2E0] bg-opacity-[40%]`}>
      <tr className="rounded-[12px]">
        {columns?.map((column, index) => (
          <th
            key={index}
            className={`px-4 py-7 text-center text-[15px] font-bold capitalize tracking-wider`}
          >
            {t(`${column}`)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
