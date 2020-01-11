const units = [{"type": "FEET", "value": 12.0},
    {"type": "INCH", "value": 1.0},
    {"type": "CENTIMETER", "value": 0.4},
    {"type": "YARD", "value": 36.0},
    {"type": "GALLON", "value": 3.78},
    {"type": "LITRES", "value": 1},
    {"type": "MILLILITERS", "value": 0.001},
    {"type": "KILOGRAMS", "value": 1000},
    {"type": "GRAMS", "value":1},
    {"type": "TONNES", "value": 1000000},
    {"type": "FAHRENHEIT", "value": 32.0},
    {"type": "CELSIUS", "value": 1.0}]

class Units {
    conversion(unit) {
        let result = units.filter(data => {
            if (data.type === unit) {
                return data.value
            }
        })
        return result[0].value
    }
}

module.exports = new Units();

