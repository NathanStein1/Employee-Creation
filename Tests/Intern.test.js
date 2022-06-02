// Test for Intern


const Intern = require('../lib/intern');



test('This is the test if the schools match', ()=> {

    let testschool = "Harvard";
    let newEmp = new Intern(null, null, null, "Harvard")
    expect(newEmp.getSchool()).toBe(testschool)
})

test('This is the test if the role match', ()=> {

    let testRole = "Intern";
    let newEmp = new Intern(null, null, null)
    expect(newEmp.getRole()).toBe(testRole)
})