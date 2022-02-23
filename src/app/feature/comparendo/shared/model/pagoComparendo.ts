export class PagoComparendo {

    static unPagoComparendo(obj: Object){
        return new PagoComparendo(
            obj['numeroComparendo'],
            obj['valorPagado']
        )
    }


    constructor( 
        public numeroComparendo: string,
        public valorPagado: number) 
        {};
}