import express from "express"
import basicController from "../controller/basic-controller.js"

const publicRouter = new express.Router()   
publicRouter.post('/api/calc/basic/sum',basicController.sum)
export{
    publicRouter
}
