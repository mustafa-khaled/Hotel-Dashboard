import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "dashboard.filter.sevenDays" },
        { value: "30", label: "dashboard.filter.ThirtyDays" },
        { value: "90", label: "dashboard.filter.NinetyDays" },
      ]}
    />
  );
}

export default DashboardFilter;
