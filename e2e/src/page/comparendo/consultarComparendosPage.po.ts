import { by, element } from 'protractor';

export class ConsultarComparendoPage{

    private botonBuscar = element(by.id('buttonBuscarComparendo'));
    private inputIdInfractor = element(by.id('inputBuscarPorInfractor'));
    private rows = element.all(by.xpath('.//tbody/tr'));
    private pagarIcon = element(by.xpath("//a[contains(mat-icon, 'payments')]"));
    private schoolIcon = element(by.cssContainingText('a.mat-icon', 'school'));
    private buttonConfirmDialog = element(by.id('botonSi'));

    async ingresarIdInfractor(idInfractor) {
        await this.inputIdInfractor.sendKeys(idInfractor);
    }


    async clickBotonBuscarComparendo() {
        await this.botonBuscar.click();
    }

    async clickPagarComparendo() {
        await this.pagarIcon.click();
    }

    async clickInscribirCurso() {
        await this.schoolIcon.click();
    }

    async clickConfirmarPago() {
        await this.buttonConfirmDialog.click();
    }

    async contarComparendos() {
        return this.rows.count();
    }


}