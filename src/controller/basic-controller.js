import basicService from "../service/basic-service.js"
const sum = (req,res)=>{
    const val1 = req.body.val1
    const val2 = req.body.val2
    const result = basicService.sum(val1,val2)
    res.status(200).json({
        data:result
    })
}

const substraction = (req,res)=>{
    const val1 = req.body.val1
    const val2 = req.body.val2
    const result = basicService.substraction(val1,val2)
    res.status(200).json({
        data:result
    })
}

const multiplication = (req,res)=>{
    const val1 = req.body.val1
    const val2 = req.body.val2
    const result = basicService.multiplication(val1,val2)
    res.status(200).json({
        data:result
    })
}

const division = (req,res)=>{
    const val1 = req.body.val1
    const val2 = req.body.val2
    const result = basicService.division(val1,val2)
    res.status(200).json({
        data:result
    })
}

export default{
    sum,substraction,multiplication,division
}