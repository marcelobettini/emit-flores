//get a single resource by id
fetch("https://5fc82e232af77700165ad172.mockapi.io/api/users/40")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

//get all resources
fetch("https://5fc82e232af77700165ad172.mockapi.io/api/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

//delete a resource by id
const id = "4";
fetch(`https://5fc82e232af77700165ad172.mockapi.io/api/users/${id}`, {
  method: "DELETE",
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

//create a new resource
const newUser = {
  createdAt: new Date(),
  name: "Marcelo Felipillo",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/311.jpg",
  email: "marcefeli09@yahoo.com.es",
};

fetch(`https://5fc82e232af77700165ad172.mockapi.io/api/users/42`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newUser),
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

//update resource by id
const updatedUser = {
  createdAt: "2023-05-31T00:20:29.394Z",
  name: "Marcelo Felipillo",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/311.jpg",
  email: "marcefeli09@yahoo.com.es",
};

fetch(`https://5fc82e232af77700165ad172.mockapi.io/api/users/42`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(updatedUser),
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
