
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");

const path = require("path");

const fs = require("fs");

const inquirer = require("inquirer");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");





var responseArray=[];







init()








function init() {

   
    
    inquirer.prompt(

    

      
      [

        {
          type: "input",
          message: "What is employee ID?",
          name: `employeeID`
        },

     

        {
            type: "input",
            message: "What is the name of Employee?",
            name: `employeeName`
          },
    
          {
            type: "input",
            message: "What is employee Email?",
            name: `employeeEmail`
          },
        {
          type: "list",
          message: `What is employee type?`,
          name: `type`,
          choices: [
            "Manager",
            "Engineer",
            "Intern",
          ]    
        },

      


        {
            type: "list",
            message: `More employees to enter?`,
            name: `more`,
            choices: [
              "Yes",
              "No"
            ]
            
         

          },
    
      

      
      ]
      
      
      )
      .then(function(response) {

        //console.log(response)
        responseArray.push(response)
        if (response.more==="Yes") {
            //iteration = iteration+1;
           
            init()
        }else{

            myArray =[];
            
            console.log(responseArray)
            //console.log(response)

            
                for (let index = 0; index < responseArray.length; index++) {
                  
                  
                
                if (responseArray[index].type=="Manager") {
        
                    const newManager = new Manager(responseArray[index].employeeID, responseArray[index].employeeName, responseArray[index].employeeEmail, "office number 1");
                    myArray.push(newManager)
                }else if(responseArray[index].type=="Intern"){
            
                    const newIntern = new Intern(responseArray[index].employeeID, responseArray[index].employeeName, responseArray[index].employeeEmail, "York University");
                    myArray.push(newIntern)
                }else{
                    
                    const newEngineer = new Engineer(responseArray[index].employeeID, responseArray[index].employeeName, responseArray[index].employeeEmail, "github.com");
                    myArray.push(newEngineer)
                     }
                
            
        
                    }
        
        
        
        
        
        
        
        var myHTML = render(myArray)
        
        //console.log(myHTML)
        
        
        fs.writeFile(outputPath, myHTML,  (err) => {
            if (err) throw err;
           
          });

        }
    
     
    
    
      });
    
    

}










