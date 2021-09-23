import { v4 as uuidv4 } from "uuid";

let usersData = [];

export const getUsers = (req, res) => {
  res.send(usersData);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const user = usersData.find((user) => user.id == id);
  if (!user) {
    res.status(404).send("User not found.");
  } else {
    res.send(user);
  }
};

export const createUser = (req, res) => {
  const { name, age, address } = req.body;
  const newUser = { id: uuidv4(), name, age, address };
  usersData.push(newUser);
  res.send(newUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age, address } = req.body;
  const user = usersData.find((user) => user.id == id);
  if (!user) {
    res.status(404).send("User not found.");
  } else {
    if (name) user.name = name;
    if (age) user.age = age;
    if (address) user.address = address;
    res.send(user);
  }
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  const user = usersData.find((user) => user.id == id);
  if (!user) {
    res.status(404).send("User not found.");
  } else {
    const removedIndex = usersData.indexOf(user);
    usersData.splice(removedIndex, 1);
    res.status(204).send("OK");
  }
};
