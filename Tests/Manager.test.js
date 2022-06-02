// Test for Manager


const Manager = require('../lib/Manager');



test('This is the test if the office match', ()=> {

    let testoffice = 3;
    let newEmp = new Manager(null, null, null, 3)
    expect(newEmp.getofficeNumber()).toBe(testoffice)
})

test('This is the test if the role match', ()=> {

    let testRole = "Manager";
    let newEmp = new Manager(null, null, null)
    expect(newEmp.getRole()).toBe(testRole)
})