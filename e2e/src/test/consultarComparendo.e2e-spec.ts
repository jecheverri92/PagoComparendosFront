import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ComparendoPage } from '../page/comparendo/comparendoPage.po';

import { ConsultarComparendoPage } from '../page/comparendo/consultarComparendosPage.po';


describe('workspace-project Comparendo', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let comparendoPage: ComparendoPage
    let consultarComparendoPage: ConsultarComparendoPage

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        consultarComparendoPage = new ConsultarComparendoPage();
        comparendoPage= new ComparendoPage();

    });


    it('Deberia listar un comparendo', async () => {
      
        const IDENTIFICACION_INFRACTOR = 'prueba';
        page.navigateTo();
        navBar.clickBotonComparendos();
        comparendoPage.clickLinkListarComparendo();
        consultarComparendoPage.ingresarIdInfractor(IDENTIFICACION_INFRACTOR);
        consultarComparendoPage.clickBotonBuscarComparendo();
        expect(true).toBe(await consultarComparendoPage.contarComparendos()>0);
       
    });

    it('Deberia pagar un comparendo', async () => {
      
        const IDENTIFICACION_INFRACTOR = 'prueba';
        page.navigateTo();
        navBar.clickBotonComparendos();
        comparendoPage.clickLinkListarComparendo();
        consultarComparendoPage.ingresarIdInfractor(IDENTIFICACION_INFRACTOR);
        consultarComparendoPage.clickBotonBuscarComparendo();
        expect(1).toBe(await consultarComparendoPage.contarComparendos());
        consultarComparendoPage.clickPagarComparendo();
        consultarComparendoPage.clickConfirmarPago();
        consultarComparendoPage.clickBotonBuscarComparendo();
        expect(0).toBe(await consultarComparendoPage.contarComparendos());
    });

  
});
