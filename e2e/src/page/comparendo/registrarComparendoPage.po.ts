import { by, element } from 'protractor';

export class RegistrarComparendoPage{

    private botonRegistrar = element(by.id('botonRegistrarComparendo'));
    private inputNumeroComparendo = element(by.id('numeroComparendoInput'));
    private selectTipoInfraccion = element(by.id('tipoInfraccionSelect'));
    private inputIdInfractor = element(by.id('identificacionInfractorInput'));
    private inputFechaComparendo = element(by.id('fechaComparendoInput'));


    async ingresarNroComparendo(nroComparendo) {
        await this.inputNumeroComparendo.sendKeys(nroComparendo);
    }

    async ingresarIdInfractor(idInfractor) {
        await this.inputIdInfractor.sendKeys(idInfractor);
    }

    async ingresarFechaComparendo(fechaComparendo) {
        await this.inputFechaComparendo.sendKeys(fechaComparendo);
    }

    async ingresarTipoInfraccion(tipoInfraccion) {
        await this.selectTipoInfraccion.sendKeys(tipoInfraccion);
    }

    async clickBotonRegistrarComparendo() {
        await this.botonRegistrar.click();
    }


}