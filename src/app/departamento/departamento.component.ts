
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
@Component({
  selector: 'tcs',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoListComponent implements OnInit {

  DepartamentoEmpleadoDTO: any = [];
  constructor(public restApi: AuthenticationService) { }
  ngOnInit() {
    this.loadDepartamentos();
  }
  
  loadDepartamentos() {
    return this.restApi.getDepartamentos().subscribe((data: {}) => {
      this.DepartamentoEmpleadoDTO = data;
    });
  }

  
 
}
