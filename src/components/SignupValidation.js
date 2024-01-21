
function Validation(values){
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d?)(?=.*[a-z]?)(?=.*[A-Z]?)[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,}$/;
    const mobile_pattern = /^[0-9]{10,}$/
    if(values.name === ""){
        error.name = "Name should not be empty!"
    }
    else{
        error.name = ""
        }
    if(values.email === ""){
        error.email = "Email should not be empty!"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email format is incorrect!"
    
    }
    else{
        error.email = ""
        }
    if(values.password === ""){
        error.password = "Password should not be empty!"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password must contain a-z,A-Z,0-9 and must be 8 characters long"
    }
    else{
        error.password = ""
    }
    if(!mobile_pattern.test(values.mobile_no)){
        error.mobile_no = "Please insert a valid mobile number!"
    }
    
    return error;
    }
    export default Validation; 