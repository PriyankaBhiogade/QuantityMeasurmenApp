const units = require('../Services/Units')

class LengthService {
    lengthConverter(req) {
        if (req.type == "Weight") {
            this.converter(req)
        }
    }



    converter(req) {
        let result = (req.value * units.conversion(req.unitType)) / units.conversion(req.convertInto)
        console.log(result)
    }
}

module.exports = new LengthService();