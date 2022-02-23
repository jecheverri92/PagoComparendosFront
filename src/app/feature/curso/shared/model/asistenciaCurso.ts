export class AsistenciaCurso {

    static crearAsistencia(obj: Object){
        return new AsistenciaCurso(
            obj['numeroComparendo'],
            obj['identificacionInfractor'],
            obj['fechaAsistencia']
        )
    }


    constructor( 
        public numeroComparendo: string,
        public identificacionInfractor:string,
        public fechaAsistencia: string,
       ) 
        {};
}