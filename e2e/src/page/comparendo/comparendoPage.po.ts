import { by, element } from 'protractor';

export class ComparendoPage{

    private linkRegistrarComparendo = element(by.id('linkRegistrar Comparendo'));
    private linkListarComparendos= element(by.id('linkListar Comparendos'));
    

    async clickLinkRegistrarComparendo() {
        await this.linkRegistrarComparendo.click();
    }

    async clickLinkListarComparendo() {
        await this.linkListarComparendos.click();
    }

  

}