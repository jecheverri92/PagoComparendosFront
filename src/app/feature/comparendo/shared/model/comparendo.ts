export class Comparendo {
  static Comparendo: Comparendo;

    static unComparendo(obj: Object){
        return new Comparendo(
            obj['numeroComparendo'],
            obj['identificacionInfractor'],
            obj['tipoInfraccion'],
            obj['fechaComparendo'],
            obj['valorComparendo'],
        )
    }


    constructor( 
        public numeroComparendo: string,
        public identificacionInfractor:string,
        public tipoInfraccion: string,
        public fechaComparendo: string,
        public valorComparendo: number) 
        {};
}