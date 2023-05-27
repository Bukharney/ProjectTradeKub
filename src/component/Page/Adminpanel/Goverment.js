import React, { useEffect } from "react";
import axios from "axios";
import TableMapping from "./TableMap";
function Goverment() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [username, setUsername] = React.useState("user@example.com");
  const [password, setPassword] = React.useState("string");
  const [token, setToken] = React.useState("");
  const [role, setRole] = React.useState("");
  const [table, setTable] = React.useState(null);
  const people = [
    {
      name: "John Doe",
      title: "CEO",
      email: "mock@email.com",
    },
    {
      name: "Jane Doe",
      title: "CTO",
      email: "mock",
    },
    {
      name: "Jane Doe",
      title: "CTO",
      email: "mock",
    },
    {
      name: "Jane Doe",
      title: "CTO",
      email: "mock",
    },
  ];

  const Role = [
    {
      role: "admin",
      table: [
        "User",
        "Account",
        "Broker",
        "Bank Transition",
        "StockOrder",
        "Stock Transaction",
        "Login/Logout",
        "Company Details",
        "Turnover",
        "Divident",
        "News",
      ],
    },
    {
      role: "user",
      table: [
        "User",
        "Account",
        "Broker",
        "Bank Transition",
        "StockOrder",
        "Stock Transaction",
        "Login/Logout",
        "Company Details",
        "Turnover",
        "Divident",
        "News",
      ],
    },
    {
      role: "broker",
      table: [
        "User",
        "Account",
        "Broker",
        "Bank Transition",
        "StockOrder",
        "Stock Transaction",
        "Login/Logout",
        "Company Details",
        "Turnover",
        "Divident",
        "News",
      ],
    },
    {
      role: "company",
      table: [
        "User",
        "Account",
        "Broker",
        "Bank Transition",
        "StockOrder",
        "Stock Transaction",
        "Login/Logout",
        "Company Details",
        "Turnover",
        "Divident",
        "News",
      ],
    },
    {
      role: "government",
      table: [
        "User",
        "Account",
        "Broker",
        "Bank Transition",
        "StockOrder",
        "Stock Transaction",
        "Login/Logout",
        "Company Details",
        "Turnover",
        "Divident",
        "News",
      ],
    },
  ];

  const login = async () => {
    const data = {
      username: username,
      password: password,
    };
    await axios
      .post("https://www.tradekub.me/login", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        console.log(response.data);
        setToken(response.data.access_token);
      })
      .catch((error) => {
        console.error(error.data);
      });
  };

  const handleLogin = () => {
    login();
  };

  const get_all_user = async (e) => {
    await axios
      .get(`http://127.0.0.1:8000/users/${e}`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTable(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  let selectedRoleObj = {};
  let tableNames = [];

  useEffect(() => {}, []);

  const handleRole = (role) => {
    setRole(null);
    setTable(null);
    console.log(role);
    setTimeout(() => {
      setRole(role);
      console.log(role);
    }, 1000);
  };

  const handleTable = (table) => {
    setTable(null);
    if (table == "User") {
      if (role == "admin") {
        get_all_user("");
      }
      if (role == "user") {
        get_all_user("my");
      }
    }
  };

  const button_css =
    "mx-1 my-1 py-2 px-4 bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-opacity-75";

  return (
    <div className=" min-h-screen min-w-full bg-white">
      <div className="flex flex-col items-center justify-center">
        <form>
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">
              Username
            </span>
            <input
              value={username}
              type="text"
              className=" border-2 rounded-lg px-2"
              onChange={(v) => {
                setUsername(v.target.value);
              }}
            />
            <span class="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              value={password}
              type="password"
              className=" border-2 rounded-lg px-2"
              onChange={(v) => {
                setPassword(v.target.value);
              }}
            />
          </label>
        </form>
        <button class={button_css} onClick={handleLogin}>
          Login
        </button>
      </div>

      {token && (
        <div className="flex flex-row items-center justify-center ">
          <span class="block text-sm font-medium text-slate-700">
            Select your role
          </span>
          {Role.map((role) => (
            <button
              class={button_css}
              onClick={() => {
                handleRole(role.role);
              }}
            >
              {role.role}
            </button>
          ))}
        </div>
      )}
      {role && (
        <>
          <div className="flex flex-row items-center justify-center ">
            <span class="block text-sm font-medium text-slate-700">
              Select your table
            </span>
          </div>
          {(selectedRoleObj = Role.find((roleObj) => roleObj.role === role)) &&
            (tableNames = selectedRoleObj ? selectedRoleObj.table : []) && (
              <div className="flex flex-row justify-center h-20">
                {tableNames.map((tableName) => (
                  <button
                    class={button_css}
                    onClick={() => {
                      handleTable(tableName);
                    }}
                  >
                    {tableName}
                  </button>
                ))}
              </div>
            )}
        </>
      )}
      {table && (
        <div className="flex flex-row items-center justify-center ">
          <TableMapping data={table} />
        </div>
      )}
    </div>
  );
}

export default Goverment;
