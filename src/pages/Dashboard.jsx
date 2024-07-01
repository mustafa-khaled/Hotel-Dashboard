import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  return (
    <div className="flex flex-col gap-[15px]">
      <Row>
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </div>
  );
}

export default Dashboard;
