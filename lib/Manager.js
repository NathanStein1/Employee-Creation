const { default: off } = require('swup/lib/modules/off');
const Employee = require('./Employee')

class Manager extends Employee {



    constructor(name, id, email, officeNumber) {

        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    

    getofficeNumber() {
        return this.office;
    }

    getRole () {
        return "Manager";
    }


}