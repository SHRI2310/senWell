import express from "express";

import { test,registerEmployee,FindEmployeeById ,filterByDept,sortBySalary} from "./controller.js";
const router = express.Router()

router.post("/register",registerEmployee)
router.get("/employee_Id/:empId",FindEmployeeById)
router.get("/filterByDept",filterByDept)
router.get("/sortBySalary",sortBySalary)

// router.route("/delete").delete(deleteAll)


export  default  router