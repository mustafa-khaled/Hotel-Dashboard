import { useTranslation } from "react-i18next";

function Stat({ icon, title, value, color }) {
  const [t] = useTranslation();

  return (
    <div className="flex items-center gap-[15px] rounded-md bg-colorGrey2 p-[15px]">
      <div
        style={{ backgroundColor: color }}
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full"
      >
        {icon}
      </div>
      <div>
        <h5 className="text-xs font-[600] uppercase text-[#9ca3af]">
          {t(title)}
        </h5>
        <p className="text-2xl font-[500]">{value}</p>
      </div>
    </div>
  );
}

export default Stat;
