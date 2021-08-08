module.exports = class Validator {

    static checkCompanyName(company){
        if(company != 'kbm7435'){
            return "CompanyName is NOT kbm7435!";
        }else{
            return true;
        }
    }

    static checkDepartmentID(dept_id){
        if(isNaN(dept_id)){
            return "Department ID isn't an int!";
        }else{
            return true;
        }
    }

    static ValidateID(id){
        if(isNaN(id)){
            return "ID isn't a number!!!!!";
        }else{
            return true;
        }
    }
}


