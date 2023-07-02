import express from "express"
import basicController from "../controller/basic-controller.js"

const publicRouter = new express.Router()   
publicRouter.post('/api/calc/basic/sum',basicController.sum)
publicRouter.post('/api/calc/basic/substract',basicController.substraction)
publicRouter.post('/api/calc/basic/multiplic',basicController.multiplication)
publicRouter.post('/api/calc/basic/division',basicController.division)
export{
    publicRouter
}
