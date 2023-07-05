import { useContext } from "react";
import { userContext } from "../context/userContext";
const Four = () => {
  const { user, setUser } = useContext(userContext);
  const handleChange = () => {
    setUser({ name: "Pepa Pig", role: "Cheerleader" });
  };
  return (
    <>
      <h2>Componente Cuatro</h2>
      <p>Es el único que necesita el usuario</p>
      <p>Usuario: {user.name} </p>
      <p>Rol:{user.role} </p>
      <button onClick={handleChange}>change it</button>
    </>
  );

};

export default Four;