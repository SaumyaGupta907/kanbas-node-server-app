import * as dao from "./dao.js";
let currentUser = null;
export default function UserRoutes(app) {
  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };

  app.delete("/api/users/:userId", deleteUser);

  const findAllUsers = async (req, res) => {
    const { role, name } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }

    if (name) {
        const users = await dao.findUsersByPartialName(name);
        res.json(users);
        return;
      }
  

    const users = await dao.findAllUsers();
    res.json(users);
  };

  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
    
   };

  const signup = async (req, res) => { };
  const signin = async (req, res) => { };
  const signout = (req, res) => { };
  const profile = async (req, res) => { };

  const createUser = async (req, res) => {
    const newUser = {
      _id: Date.now().toString(),
      ...req.body
    };

    const user = await dao.createUser(newUser);
    res.json(user);
  };
  // app.get("/api/users", findAllUsers);
  
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    res.json(status);
  };


  app.get("/api/users", findAllUsers);
  app.put("/api/users/:userId", updateUser);
  app.get("/api/users/:userId", findUserById);
  app.post("/api/users", createUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
