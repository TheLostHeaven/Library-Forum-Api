import Role from "../Schemas/Role.js";
import User from "../Schemas/User.js";


export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

//GetUsers
export const getUser = async (req,res) =>{
  try {
    const Users = await User.find({});
    return res.json(Users);
  }
  catch(error){
    return res.status(500),json({msg: error.message})
  }
}

//GetUsersForId
export const getUserForId = async (req, res) =>{
  try {
    const { id } = req.params;
    const Users = await User.findById(id)
    res.status(200).json(Users);
  }
  catch (error){
    return res.status(500).json( {msg: error.message})
  }
}

//UpdateForId
export const updateUserForId = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstnames, username, userimg, email, newPassword } = req.body;

    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({ message: "User not Found" });
    }

    await User.findByIdAndUpdate(id, {
      firstnames: firstnames,
      username: username,
      userimg: userimg,
      email: email,

    });

    const updatedUser = await User.findById(id);
    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Delete
export const deleteUserById = async (req, res) =>{
  try{
    const {id} = req.params;
    await User.findByIdAndDelete(id);
    res.json({ msg: "User Delete"})
  }catch(error){
    return res.status(500).json({ msg: error.message})
  }
};


