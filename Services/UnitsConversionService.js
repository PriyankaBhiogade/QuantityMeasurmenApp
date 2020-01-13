const units = require('../Services/Units')

class UnitsConversionService {
    unitConversionService(req) {
        if (req.unitType == "Temperature") {
           let d1 = units.temperatureConverter(req)
            // let d2 =units.temperatureConverter(req)
            // console.log("d1,f2", d1,"=======",d2)
        } else {
            return (req.value * units.getConversionValue(req.unitType, req.unit1)) / units.getConversionValue(req.unitType, req.unit2)
        }
    }
}

module.exports = new UnitsConversionService();