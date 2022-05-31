// If email === response.email, pass


// getgitHub() {
//     return this.gitHub;
// }

// getRole () {
//     return "Engineer";
// }



const Engineer = require('../lib/Engineer');



test('This is the test if the github match', ()=> {

    let testgitHub = "GittytheLittyCoder";
    let newEmp = new Engineer(null, null, null, "GittytheLittyCoder")
    expect(newEmp.getgitHub()).toBe(testgitHub)
})

test('This is the test if the role match', ()=> {

    let testRole = "Engineer";
    let newEmp = new Engineer(null, null, null)
    expect(newEmp.getRole()).toBe(testRole)
})