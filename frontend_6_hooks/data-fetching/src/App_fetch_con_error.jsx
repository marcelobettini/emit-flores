import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";
function App() {
  console.count("App renders");
  const [baseUrl, setBaseUrl] = useState("https://jsonplaceholder.typicode.com/useras");
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  const fakeError = () => {
    setBaseUrl("https://jsonplaceholder.typicode.com/users");
  };
  useEffect(() => {
    fetch(baseUrl)
      .then(res => {
        if (!res.ok) throw new Error();
        setError(false);
        return res.json();
      })
      .then(data => {
        setTimeout(() => setUsers(data), 2000);
      })
      .catch(err => setError(true));
  }, [baseUrl]);



  if (!users.length && !error) return <h2>Loading...</h2>;
  if (error) return (
    <>
      <h2>esssplotó</h2>
      <button onClick={fakeError}>retry</button>
    </>
  );
  return (
    <>
      <h1>data fetching</h1>
      <UsersList users={users} />

    </>

  );
}


