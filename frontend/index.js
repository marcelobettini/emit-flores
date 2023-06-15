import data from "./data.js";
const usersContainer = document.getElementById("users-container");
const users = JSON.parse(data);
console.log(users[0]);
// for (let user of users) {
//   console.log(`
//   nombre: ${user.name.first} ${user.name.last}
//   dirección: ${user.location.street.name} ${user.location.street.number}
//   `);
// }

// for (let i = 0; i < users.length; i++) {
//   console.log(`
//   nombre: ${users[i].name.first} ${users[i].name.last}
//   dirección: ${users[i].location.street.name} ${users[i].location.street.number}
//   `);
// }

users.forEach((usr) => {
  const card = document.createElement("div");
  card.innerHTML = `
  <h2>${usr.name.first} ${usr.name.last}</h2>
<img src=${usr.picture.medium} alt=${usr.name.first} ${usr.name.last}/>
  <p> ${usr.location.street.name} ${usr.location.street.number}</p>
   `;
  usersContainer.appendChild(card);
});