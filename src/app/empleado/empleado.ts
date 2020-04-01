import { DepartamentoDTO } from '../departamento/departamento';
import { FuncionDTO } from '../funcion/funcion'

export class Empleado {
    idEmpleado: number;
    nombre: string;
    apellidos: string;
    numeroDocumento: string;
    correo: string;
    telefono: string;
    activo: boolean;
    salario: number;
    departamento: DepartamentoDTO;
    funcionList: FuncionDTO[];
 }