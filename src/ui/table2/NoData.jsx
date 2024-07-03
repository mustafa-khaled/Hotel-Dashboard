import { useTranslation } from "react-i18next";
import { MdError } from "react-icons/md";

function NoData({ data, loading, columns }) {
  const [t] = useTranslation();

  return (
    <>
      {data?.length === 0 && !loading && (
        <tbody>
          <tr>
            <td colSpan={columns?.length}>
              <div className="flexCenter mt-5 gap-1 text-center">
                <MdError className="cursor-default" />
                <p className="font-semibold">{t("table.noDataFound")}</p>
              </div>
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
}

export default NoData;
