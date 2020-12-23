import "./style.css";

function Employee({name1, email, phone, skills, imgSrc}){
    return( 

    <div className="EmployeeDiv">
        <img className="avatar" src={imgSrc} />

        <ul >
        <h3>{name1}</h3>
        <li><b>Email: </b>{email}</li>
        <li><b>Phone: </b>{phone}</li>
        <li><b>Skills: </b>{skills}</li>
       </ul>
        
    </div>
);
}


export default Employee;

