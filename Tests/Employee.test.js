// If email === response.email, pass
const Employee = require('../lib/Employee');




// getName() {
//     return this.name;
// }

// getId() {
//     return this.id;
// }

// getEmail(){
//     return this.email;
// }

// getRole () {
//     return "Employee";
// }


test('This is the test if the emails match', ()=> {

    let testEmail = "Jennifer@Jenny.com";
    let newEmp = new Employee(null, null, "Jennifer@Jenny.com")
    expect(newEmp.getEmail()).toBe(testEmail)
})


test('This is the test if the Names match', ()=> {

    let testName = "Jennifer";
    let newEmp = new Employee('Jennifer', null, null)
    expect(newEmp.getName()).toBe(testName)
})
