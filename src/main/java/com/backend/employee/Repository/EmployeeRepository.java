package com.backend.employee.Repository;

import com.backend.employee.Model.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<employee,Long>{

}