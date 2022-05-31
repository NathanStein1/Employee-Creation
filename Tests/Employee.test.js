// TEST ENVIROMENT FOR EMPLOYEE CLASS




const Employee = require('../lib/Employee');



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


test('This is the test if the role match', ()=> {

    let testRole = "Employee";
    let newEmp = new Employee(null, null, null)
    expect(newEmp.getRole()).toBe(testRole)
})


test('This is the test if the ID match', ()=> {

    let testId = 3;
    let newEmp = new Employee(null, 3, null)
    expect(newEmp.getId()).toBe(testId)
})