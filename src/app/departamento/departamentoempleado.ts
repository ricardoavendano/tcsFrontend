import { EmpleadoBasicoDTO } from '../empleado/empleadobasico'
import { FuncionDTO } from '../funcion/funcion'

export class DepartamentoEmpleadoDTO {
    idDepartamento: number;
    nombre: string;
    descripcion: string;
    codigo: number;
    empleadoBasicoDTO: EmpleadoBasicoDTO;
    funcionDTO: FuncionDTO[];
 }