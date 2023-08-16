import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/heading/Heading";
import Row from "../ui/row/Row";

function Dashboard() {
  return (
    <div className="pages-margin">
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </div>
  );
}

export default Dashboard;
