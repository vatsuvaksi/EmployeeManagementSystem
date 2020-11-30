package com.backend.employee.Controller;

import com.backend.employee.Model.employee;
import com.backend.employee.Repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController{

    @Autowired
    private EmployeeRepository employeeRepository;

    //getting all employees
    @GetMapping("/employees")
    public List<employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
    //Creating employee
    @PostMapping("/employees")
    public employee createEmployee(@RequestBody employee emp){
        return employeeRepository.save(emp);
    }


}