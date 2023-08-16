import User from "../schemas/user"

//view all users
export const getAllUsers = async (req,res) => {
  try {
    const user = await User.find()
    res.status(200).json(user)
  } catch(error) {
    res.json ({message: error.message})
  }
}

//view one user
export const getUser = async ( req, res) => {
  try {
    const id = req.params.id;
    await User.findById({_id:id}).then ( (user) =>{
      res.status(200).json(user)
    }
    )
  }catch (error) {
    res.json({message: error.message})
}
}

  export const createUser = async (req, res) => {
    try {
        await User.create(req.body)
        res.status(200).json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Update user
export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        await User.updateOne({_id:id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Delete user
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id : id }).then( res =>{
            console.log(res)
        })
        res.status(200).json({
            "message":"¡Registro borrado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
