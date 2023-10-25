// import React, { useReducer } from "react";
import React, {useState,useEffect} from "react";
import axios from "axios"

const InboxPage = () => {
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);


  const loadUsers = () => {
    let url = "https://reqres.in/api/users?page=2";

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        let serverData = response.data;
        setUserProfile(serverData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="main">
      <h3> InboxPage </h3>

      <button onClick={() => loadUsers()}>Load List of Users</button>
      <table className="table-borde">
        <thead>
         <tr>
          <th>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email Id</td>
            <td>Avtar</td>
          </th>
        </tr>
        </thead>
        <tbody>

{
userProfile.map((value, index) => {
  return(
    <tr key={index}>
      <td className="table-border">{value.id}</td>
      <td className="table-border">{value.first_name}</td>
      <td className="table-border">{value.last_name}</td>
      <td className="table-border">{value.email}</td>
      <td className="table-border">
        <img src={value.avatar} className="profile-pic" alt="Welcome"/>
      </td>
    </tr>
  )
})

}

</tbody>
      </table>
    </div>
  );
};

export default InboxPage;
