const units = [{
    Length: [{"type": "FEET", "value": 12.0},
        {"type": "INCH", "value": 1.0},
        {"type": "CENTIMETER", "value": 0.4},
        {"type": "YARD", "value": 36.0}],
    Volume: [
        {"type": "GALLON", "value": 3.78},
        {"type": "LITRES", "value": 1},
        {"type": "MILLILITERS", "value": 0.001}],
    Weight: [
        {"type": "KILOGRAMS", "value": 1000},
        {"type": "GRAMS", "value": 1},
        {"type": "TONNES", "value": 1000000}],
    Temperature: [
        {"type": "FAHRENHEIT", "value": 32.0},
        {"type": "CELSIUS", "value": 1.0}]
}]
let typeUnit = ["Length", "Volume", "Weight", "Temperature"]

class Units {
    getConversionValue(unitType, unit) {
        let result;
        if (unitType == typeUnit[0]) {
            result = units.map(data => {
                return data.Length.filter(data => {
                    if (data.type == unit) {
                        return data.value
                    }
                })
            })
        }
        if (unitType == typeUnit[1]) {
            result = units.map(data => {
                return data.Volume.filter(data => {
                    if (data.type == unit) {
                        return data.value
                    }
                })
            })
        }
        if (unitType == typeUnit[2]) {
            result = units.map(data => {
                return data.Weight.filter(data => {
                    if (data.type == unit) {
                        return data.value
                    }
                })
            })
        }
        return result[0][0].value
    }

    temperatureConverter(req) {
        let result;
        if (req.unitType == typeUnit[3]) {
            result = units.map(data => {
                return data.Temperature.filter(data => {
                    if (data.type == req.unit1) {
                        let data1212 = (req.value - 32) * 5/9
                        console.log("datadat111",data1212)
                    }
                    else {
                        let data1212 = (req.value * 9 / 5) + 32
                        console.log("datadta121", data1212)
                    }
                })
            })
        }
    }
}

module.exports = new Units();

