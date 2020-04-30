// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const employee = require("./Employee");
const path = require("path");

class engineer extends employee{
    constructor(name, id, email, github){

        super(name, id, email);
        this.github = github;

    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.github
    }

}

module.exports = engineer;