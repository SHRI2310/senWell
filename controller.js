import { Employee } from "./model.js";
import bcrypt from "bcrypt"
export const test = async (req, res) => {
    return res.send("running")
}

export const registerEmployee = async (req, res) => {
    try {
        const {
            employee_id,
            first_name,
            last_name,
            department,
            Address,
            dob,
            salary,
            password
        } = req.body;



        let employee = await Employee.findOne({ employee_id })

        if (employee) { return res.status(400).json({ status: false, message: "employee already exists with this ID" }) }

        // here I am expecting that he will be getting Employee Id  From company
        let salt = await bcrypt.genSalt(10)


        req.body.password = await bcrypt.hash(password, salt)

        employee = await Employee.create(req.body)

        return res.send({ employeeDetails: employee })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}



export const FindEmployeeById = async (req, res) => {
    try {
        const empId = req.param.empId
        console.log(empId)
        const employee = await Employee.findOne({ empId })
        console.log(employee);
        if (!employee) { return res.status(400).json({ status: false, message: "employee do not exists with this ID" }) }


        res.status(200).json({ success: true, Employee: employee })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}

export const filterByDept = async (req, res) => {
    try {
        const { department } = req.body;
        let filter = await Employee.find({ department })
        res.status(200).json({ success: true, Employee: filter })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}

export const sortBySalary = async (req, res) => {

    try {
        let Sort = await Employee.find().sort({ salary: 1 })
        res.status(200).json({ success: true, EmployeeSortedOnSalary: Sort })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}