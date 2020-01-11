const lengthService = require('../Services/lengthService')
class LengthController{
    lengthController(req,res){
        let filterData = {
            type:req.body.type,
            value:req.body.value,
            unitType:req.body.unitType,
            convertInto:req.body.convertInto
        }
        lengthService.lengthConverter(filterData).then(data =>{
            res.send(data)
        })
    }
}
module.exports = new LengthController();