import Employee from "./Empoyee";
import {useState} from "react";

function EmployeeList(){

    let [employeeData, setEmployeeData] = useState(
        [ 
        {
          name1: "Jonas Holmkvist ",
          
          email: "dodo@mail.com",

          phone: "0707070707",

          skills: "Poker, Muay Thai, Java",

          imgSrc: "https://i.imgur.com/t9HFQvX.png",
          
        },
        
        {
            name1: "Johanna Berg",
            
            email: "eoeo@mail.com",
  
            phone: "070707",
  
            skills: "Java",
  
            imgSrc: "https://i.imgur.com/ebHfuth.png",
            
          },

          {
            name1: "Gus",
            
            email: "toto@mail.com",
  
            phone: "0707070",
  
            skills: "Cars",
  
            imgSrc: "https://i.imgur.com/Q9qFt3ml.png",
            
          },

          {
            name1: "Pam Amber",
            
            email: "gogo@mail.com",
  
            phone: "070707",
  
            skills: "C++",
  
            imgSrc: "https://i.imgur.com/TUhCrsY.png",
           
            
          },
        ]
        );

        function addEmployee(){
            setEmployeeData(function(prevstate){
              return [
                ...prevstate,
                {name1: "Anna Costa", email: "anna@mail.com", phone: "070707",
                skills: "JavaScript",
              imgSrc: "https://i.imgur.com/ebHfuth.png",
            }]
            });
          }
    

    return(
          <>
        <button onClick={addEmployee}>Add Employee</button>
   {employeeData.map(function(emp){
      return (
      <Employee 
       name1={emp.name1}
       email={emp.email}
       phone={emp.phone} 
       skills={emp.skills} 
       imgSrc={emp.imgSrc}
       
       
       />
   );
 } )}
   
    </>
    );
}

export default EmployeeList;