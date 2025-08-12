import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

let users = [
  {
    id: 1,
    firstName: "James Patrick",
    lastName: "De Mesa",
    section: "BSIT - 4B",
    status: "Present",
  },
  {
    id: 2,
    firstName: "Patrick",
    lastName: "De Mesa",
    section: "BSIT - 4B",
    status: "Present",
  },
];

app.get("/users", (req, res) => {
  const { firstName, lastName, section, status } = req.body;
  const userIndex = users.findIndex(
    (user) => user.firstName === firstName && user.lastName === lastName
  );
  if (userIndex !== -1) {
    users[userIndex].status = status;
    console.log(`Updated attendance for ${firstName} ${lastName} to ${status}`);
    res.status(200).json({
      message: `Attendace for ${firstName} ${lastName} has been updated to ${status}`,
    });
  } else {
    const newUser = {
      id: users.length + 1,
      lastName,
      firstName,
      section,
      status,
    };
    users.push(newUser);
    console.log(
      `New user added: ${lastName} ${lastName} with status: ${status}.`
    );
    res.status(201).json({
      message: `New student ${lastName} ${lastName} has been added with status: ${status}.`,
    });
  }
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
