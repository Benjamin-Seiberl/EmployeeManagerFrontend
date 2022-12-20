import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({providedIn: 'root'})
export class EmployeeService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:8080/api/employee/all")
  }

  public addEmployees(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>("http://localhost:8080/api/employee/add", employee)
  }

  public updateEmployees(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>("http://localhost:8080/api/employee/update", employee)
  }

  public deleteEmployees(employeeId: number | undefined): Observable<void> {
    return this.http.delete<void>("http://localhost:8080/api/employee/delete/" + employeeId)
  }
}
