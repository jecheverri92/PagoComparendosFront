export class RegistarComparendo {

    static unRegistroComparendo(obj: Object){
        return new RegistarComparendo(
            obj['numeroComparendo'],
            obj['identificacionInfractor'],
            obj['tipoInfraccion'],
            obj['fechaComparendo']
        
        )
    }

    constructor( 
        public numeroComparendo: string,
        public identificacionInfractor: string,
        public tipoInfraccion: number,
        public fechaComparendo: string
    )
        {};
}