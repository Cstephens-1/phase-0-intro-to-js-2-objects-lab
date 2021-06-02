const employee = {
    name: "Joe",
    address: "123 Smith Rd."
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = Object.assign({}, employee, {[key]: value})
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   Object.assign(employee, {[key]: value}) 
   return employee
}

function deleteFromEmployeeByKey(employee, key){
    const employeeClone = Object.assign({}, employee, key)
    delete employeeClone[key]
    return employeeClone
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}