import React, { useState, useEffect } from "react";
import TableRow from "../components/TableRow";
import { usersJSON } from "../data";

const Table = (props) => {
  //   console.log(props.sortBy);
  const [usersData, setUsersData] = useState(usersJSON);

  useEffect(() => {
    let sortBy = props.sortBy;
    console.log("sortBy", sortBy);
    if (sortBy !== "") {
      switch (sortBy) {
        case "age":
          compareByAge();
          break;
        case "name":
          compareByName();
          break;
        default:
          return false;
      }
    }
  }, [props.sortBy]);

  const compareByAge = () => {
    const users = [...usersData];
    users.sort(_compareBy("age"));
    setUsersData(users);
  };

  function compareByName() {
    const users = [...usersData];
    users.sort(_compareBy("name"));
    setUsersData(users);
  }

  const _compareBy = (sortBy) => {
    return function (a, b) {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    };
  };

  const rows = usersData.map((user, index) => {
    return <TableRow key={index} data={user}></TableRow>;
  });

  return (
    <div>
      <table className="table table-responsive">
        <thead>
          <tr key="head">
            <th>Age</th>
            <th>Name</th>
            <th>Points</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
