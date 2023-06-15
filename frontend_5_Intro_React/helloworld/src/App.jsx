import './App.css';
import UsersList from './components/UsersList';

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@example.com"
  },
  {
    id: 6,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com"
  },
  {
    id: 7,
    name: "Michael Lee",
    email: "michael.lee@example.com"
  },
  {
    id: 8,
    name: "Jennifer Taylor",
    email: "jennifer.taylor@example.com"
  },
  {
    id: 9,
    name: "Daniel Anderson",
    email: "daniel.anderson@example.com"
  },
  {
    id: 10,
    name: "Amy Garcia",
    email: "amy.garcia@example.com"
  }
];

function App() {

  return (
    <>
      <UsersList users={data} />
    </>
  );
}

export default App;
