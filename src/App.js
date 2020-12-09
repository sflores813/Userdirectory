import React, { useState } from "react";
import Header from "./components/htmlHeader";
import Main from "./components/htmlMain";
import Users from "./user.json";
function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [users, setUsers] = useState(Users);

  function searchName(event) {
    setSearch(event.target.value)
  };

  function filterName() {
    if (!sort) {
      setUsers(users.sort((a, b) => (a.name > b.name) ? 1 : -1));
      setSort(true);
    } else {
      setUsers(users.sort((a, b) => (a.name > b.name) ? -1 : 1));
      setSort(false);
    }
  };

  function filterDepartment() {
    if (!sort) {
      setUsers(users.sort((a, b) => (a.department > b.department) ? 1 : -1));
      setSort(true);
    } else {
      setUsers(users.sort((a, b) => (a.department > b.department) ? -1 : 1));
      setSort(false);
    }
  };
  return (
    <div>
      <Header
        search={search}
        onSearch={searchName}
        filterName={filterName}
        filterDepartment={filterDepartment}
      />
        {Users.map(event => {
          return (<Main {...event} />)
        })}
    </div>
  );
 
}

export default App;
