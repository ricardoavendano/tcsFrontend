import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user/user.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Empleado } from '../empleado/empleado';
import { DepartamentoEmpleadoDTO } from '../departamento/departamentoempleado';

@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {

    apiURL = 'http://localhost:8081/tcs';
    constructor(private http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }  

    authenticate(user): Observable<User> {
        return this.http.post<User>(this.apiURL + '/login', JSON.stringify(user), this.httpOptions)
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
        
      }

      getEmpleados(): Observable<Empleado> {
        return this.http.get<Empleado>(this.apiURL + '/empleado/cargar')
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      getDepartamentos(): Observable<DepartamentoEmpleadoDTO> {
        return this.http.get<DepartamentoEmpleadoDTO>(this.apiURL + '/departamento/cargar')
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }
      
      handleError(error) {
        let errorMessage = '';
          if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          window.alert(errorMessage);
          return throwError(errorMessage);
     }
  
    sessionStorageValue(idUsuario:string) {
      sessionStorage.setItem("idUsuario", idUsuario);
    }

    isUserLoggedIn() {
      let user = sessionStorage.getItem('idUsuario')
      console.log(!(user === null))
      return !(user === null)
    }
  
    logOut() {
      sessionStorage.removeItem('idUsuario')
    }
}