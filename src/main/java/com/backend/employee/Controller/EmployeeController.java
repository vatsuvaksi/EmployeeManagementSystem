package com.backend.employee.Controller;

import com.backend.employee.Exceptions.ResourceNotFoundException;
import com.backend.employee.Model.employee;
import com.backend.employee.Repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    //get byy Id 
    @GetMapping("/employees/{id}")
    public ResponseEntity<employee> getById(@PathVariable Long id){
        employee emp = employeeRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("emp dosen't exist" + id));
        return ResponseEntity.ok(emp);
    }
    //Updating employee
    @PutMapping("/employees/{id}")
    public ResponseEntity<employee> updateEmployee(@PathVariable Long id ,@RequestBody employee emp){
        employee employeeFound = employeeRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("emp dosen't exist" + id));
        employeeFound.setFirstName(emp.getFirstName());
        employeeFound.setLastName(emp.getLastName());
        employeeFound.setEmailId(emp.getEmailId());
     return ResponseEntity.ok(employeeRepository.save(employeeFound));
       
    }


}