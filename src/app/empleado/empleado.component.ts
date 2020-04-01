
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
@Component({
  selector: 'tcs',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoListComponent implements OnInit {

  Empleado: any = [];
  constructor(public restApi: AuthenticationService) { }
  ngOnInit() {
    this.loadEmpleados();
  }
  
  loadEmpleados() {
    return this.restApi.getEmpleados().subscribe((data: {}) => {
      this.Empleado = data;
    });
  }

  
 
}
