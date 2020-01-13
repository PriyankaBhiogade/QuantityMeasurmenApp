const lengthService = require('../Services/UnitsConversionService');

class UnitController {
    unitConversionController(req, res) {
        req.checkBody('unitType', {message: 'UnitType is required'}).notEmpty()
        req.checkBody('value', {message: 'Value is required'}).notEmpty()
        req.checkBody('unit1', {message: 'Unit1 is required'}).notEmpty()
        req.checkBody('unit2', {message: 'Unit2 is required'}).notEmpty()
        const errors = req.validationErrors();
        let response = {
            success: false,
            status: 422,
            message: "Invalid Input",
            data: errors
        }
        if (errors) {
            return res.status(422).send(response);
        } else {
            let filterData = {
                unitType: req.body.unitType,
                value: req.body.value,
                unit1: req.body.unit1,
                unit2: req.body.unit2
            }
            let data = lengthService.unitConversionService(filterData)
            response = {
                success: true,
                message: `Convert ${filterData.unit1} to ${filterData.unit2}`,
                data: `${filterData.value} ${filterData.unit1}  = ${data} ${filterData.unit2}`
            }
            res.status(200).send(response)
        }
    }
}

module.exports = new UnitController();