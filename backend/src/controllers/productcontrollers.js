import multer from "multer";
import fs from "fs-extra";
import DaktsProductModel from "../models/productmodel.js";

const DaktsProductsController = {
    createProduct: async (solicitud, respuesta) => {
      try {
        const storage = multer.diskStorage({
            destination: 'images',
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            },
        });
        const carga = multer({ storage: storage }).single('image');
        carga(solicitud, respuesta, async (error) => {
            if (error) {
                respuesta.json({
                    result: 'Sorry!',
                    message: 'An error occurred uploading the image',
                    data: null,
                  });
            } else {
                const newProduct = new DaktsProductModel({
                    name: solicitud.body.name,
                    category: solicitud.body.category,
                    description: solicitud.body.description,
                    features: {
                        preparation: solicitud.body.preparation,
                        cocoaAmount: solicitud.body.cocoaAmount,
                        caneSugar: solicitud.body.caneSugar,
                        refinedSugar: solicitud.body.refinedSugar,
                        palmOil: solicitud.body.palmOil,
                        gluten: solicitud.body.gluten
                    },
                    price: solicitud.body.price,
                    weight: solicitud.body.weight,
                    availables: solicitud.body.availables,
                    inStock: solicitud.body.inStock,
                    image: solicitud.file.filename,
                  });
                  const productCreated = await newProduct.save();
                  if (productCreated._id) {
                    respuesta.json({
                      result: 'Good!',
                      message: 'Product created!',
                      data: productCreated._id,
                    });
                  }
            }
        })
        
      } catch (error) {
        respuesta.json({
          result: "Sorry!",
          message: "Something went wrong creating the product",
          data: error
        });
      }
      },

    readProduct: async (solicitud, respuesta) => {
        try {
          const productFound = await DaktsProductModel.findById(solicitud.params.id)
          if (productFound._id) {
            respuesta.json({
              result: "Good!",
              message: "Product found!",
              data: productFound
            });
          }          
        } catch (error) {
        respuesta.json({
          result: "Sorry!",
          message: "Something went wrong finding the product",
          data: error
        });
        }
      },

    readProducts: async (solicitud, respuesta) => {
        try {
          const allProducts = await DaktsProductModel.find();
          respuesta.json({
            result: "Good!",
            message: "Products found!",
            data: allProducts
          });
        } catch (error) {
          respuesta.json({
            result: "Sorry!",
            message: "Something went wrong finding the products",
            data: error
          });
        }
      },

      updateProduct: async (solicitud, respuesta) => {
        try {
          const productUpdated = await DaktsProductModel.findByIdAndUpdate(
            solicitud.params.id,
            solicitud.body
          )
          if (productUpdated._id) {
            respuesta.json({
              result: 'Good!',
              message: 'Product updated!',
              data: productUpdated._id,
            });
          }
        } catch (error) {
          respuesta.json({
            result: 'Sorry!',
            message: 'Something went wrong updating the product',
            data: error,
          });
        }
      },

      deleteProduct: async (solicitud, respuesta) => {
        try {
          const productDeleted = await DaktsProductModel.findByIdAndDelete(solicitud.params.id)
          if (productDeleted._id) {
            await fs.unlink('images/' + productDeleted.image);
            respuesta.json({
              result: "Good!",
              message: "Product deleted",
              data: null
            });
          }         
        } catch (error) {
        respuesta.json({
          result: "Sorry!",
          message: "Something went wrong deleting the product",
          data: error
        });
        }
      } 
}

export default DaktsProductsController;