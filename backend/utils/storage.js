// TEMP DEV DATABASE
const users = [
  {
    user_id: "1",
    name: "Ivan",
    email: "ivan@abv.bg",
    password: "Ivan1234",
  },
  {
    user_id: "2",
    name: "Petar",
    email: "pepinko@gmail.com",
    password: "Petar1234",
  },
];

const findUserById = (id) => {
  return users.find((user) => user.user_id === id);
};

module.exports = { users, findUserById };
