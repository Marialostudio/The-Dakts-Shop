import bcrypt from "bcryptjs";
import DaktsUsersModel from "../models/usermodel.js";

const DaktsUsersController = {
    createUser: async (solicitud, respuesta) => {
      try {
        const { firstName, lastName, emailAddress, password } = solicitud.body;
        const passwordProtected = await bcrypt.hash(password, 10);
        const newUser = new DaktsUsersModel({
          firstName,
          lastName,
          emailAddress,
          password: passwordProtected,
        });
        const userCreated = await newUser.save();
        if (userCreated._id) {
          respuesta.json({
            result: "Good!",
            message: "User Created",
            data: userCreated._id
          });
          console.log(userCreated)
        }
      } catch (error) {
        respuesta.json({
          result: "Sorry!",
          message: "Something went wrong creating the user",
          data: error
        });
      }
      },

       readUser: async (solicitud, respuesta) => {
        try {
          const userFound = await DaktsUsersModel.findById(solicitud.params.id)
          if (userFound._id) {
            respuesta.json({
              result: "Good!",
              message: "User found!",
              data: userFound
            });
          }          
        } catch (error) {
        respuesta.json({
          result: "Sorry!",
          message: "Something went wrong reading the user",
          data: error
        });
        }
      },

      readUsers: async (solicitud, respuesta) => {
        try {
          const allUsers = await DaktsUsersModel.find();
          respuesta.json({
            result: "Good!",
            message: "Users found!",
            data: allUsers
          });
        } catch (error) {
          respuesta.json({
            result: "Sorry!",
            message: "Something went wrong reading the users",
            data: error
          });
        }
      },

      updateUser: async (solicitud, respuesta) => {
        try {
          const userUpdated = await DaktsUsersModel.findByIdAndUpdate(
            solicitud.params.id,
            solicitud.body
          )
          if (userUpdated._id) {
            respuesta.json({
              result: 'Good!',
              message: 'User updated!',
              data: userUpdated._id,
            })
          }
        } catch (error) {
          respuesta.json({
            result: 'Sorry!',
            message: 'Something went wrong updating the user',
            data: error,
          })
        }
      },

      deleteUser: async (solicitud, respuesta) => {
        try {
          const userDeleted = await DaktsUsersModel.findByIdAndDelete(solicitud.params.id)
          if (userDeleted._id) {
            respuesta.json({
              result: "Good!",
              message: "User deleted",
              data: null
            });
          }          
        } catch (error) {
        respuesta.json({
          result: "Sorry!",
          message: "Something went wrong deleting the user",
          data: error
        });
        }
      } 
}

export default DaktsUsersController;