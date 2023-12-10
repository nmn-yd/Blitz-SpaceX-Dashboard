import { useState } from "react";

function Filters({ setColumnFilters, columnFilters }) {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  const taskName =
    columnFilters.find((f) => f.id === selectedFilter)?.value || "";
  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  return (
    <div className="search-container">
      <input
        type="text"
        id="searchInput"
        placeholder="Search by.... "
        value={taskName}
        onChange={(e) => onFilterChange(selectedFilter, e.target.value)}
      />

      <select
        id="selectFilter"
        value={selectedFilter}
        onChange={handleFilterChange}
      >
        <option value="">Choose here</option>
        <option value="mission_name">Mission</option>

        <option value="launch_site_site_name">Launch Site</option>
        <option value="rocket_rocket_name">Rocket</option>
      </select>
    </div>
  );
}

export default Filters;
