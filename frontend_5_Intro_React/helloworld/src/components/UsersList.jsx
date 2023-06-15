import PropTypes from "prop-types";
import Controls from "./Controls";
function UsersList({ users }) {
  return (
    <>
      <hr />
      <ul>
        {
          users.map((usr) => <li key={usr.id}>{usr.name}</li>)
        }
      </ul>
      <hr />
      <Controls />
    </>
  );
}
UsersList.propTypes = [{
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,

}];
export default UsersList;