import { useTranslation } from "react-i18next";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="rounded-md bg-colorGrey2 p-[15px]">
        <Row>
          <Heading>{t("sidebar.dashboard")}</Heading>
          <DashboardFilter />
        </Row>
      </div>

      <DashboardLayout />
    </div>
  );
}

export default Dashboard;
