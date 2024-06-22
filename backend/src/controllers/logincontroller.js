import bcryptjs from 'bcryptjs';
import { generateToken, validateToken } from '../helpers/functions.js';
import DaktsModel from "../models/usermodel.js";

const LogInController = {
    logInSession: async (solicitud, respuesta) => {
        try {
          const { emailAddress, password } = solicitud.body;
          console.log(password);
          const userFound = await DaktsModel.findOne({
            emailAddress: emailAddress
          });
          const validPassword = await bcryptjs.compare(
            password,
            userFound.password
          );
          if (validPassword) {
            const token = await generateToken({
                id: userFound._id,
                firstName: userFound.firstName,
            });
            respuesta.json({
                result: "Good!",
                message: "Access granted",
                data: token
            })
          } else {
            respuesta.json({
                result: "Bad!",
                message: "Access denied!",
                data: null
            })
            
          }
          
         
        } catch (error) {
          respuesta.json({
            resultado: "Sorry!",
            mensaje: "An error occurred logging in",
            datos: error
          });
        }
        },
        
        validToken: async (solicitud, respuesta) => {
            try {
              const token = solicitud.params.token;
              const decoded = await validateToken(token);
              if (decoded.id) {
                respuesta.json({
                  result: 'Good!',
                  message: 'Valid token',
                  data: decoded,
                });
              } else {
                respuesta.json({
                  result: 'Bad!',
                  message: 'Invalid token',
                  data: null,
                });
              }
            } catch (error) {
              respuesta.json({
                result: 'Sorry!',
                message: 'An error occurred while validating the token',
                data: error,
              });
            }
          },
}

export default LogInController;