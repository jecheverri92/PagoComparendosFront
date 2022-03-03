import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { RegistrarComparendoPage } from '../page/comparendo/registrarComparendoPage.po';
import { ComparendoPage } from '../page/comparendo/comparendoPage.po';
import {  by, element } from 'protractor';

var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
};


describe('workspace-project Comparendo', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let comparendoPage: ComparendoPage
    let registrarComparendoPage: RegistrarComparendoPage

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        registrarComparendoPage = new RegistrarComparendoPage();
        comparendoPage= new ComparendoPage();

    });


    it('Deberia registrar un comparendo', async () => {
        const NUMERO_COMPARENDO = '011012';
        const IDENTIFICACION_INFRACTOR = '123456';
        const FECHA_COMPARENDO = '2020-01-02'

        page.navigateTo();
        navBar.clickBotonComparendos();
        comparendoPage.clickLinkRegistrarComparendo();
       registrarComparendoPage.ingresarNroComparendo(NUMERO_COMPARENDO);
       registrarComparendoPage.ingresarIdInfractor(IDENTIFICACION_INFRACTOR);
        element(by.id('tipoInfraccionSelect')).click();
        element.all(by.cssContainingText('span.mat-option-text', "First option")).click();
        
        registrarComparendoPage.ingresarFechaComparendo(FECHA_COMPARENDO);
       
       const form = element(by.id('registrarComparendoForm'));
       expect(hasClass(form, 'ng-invalid')).toBe(false);

        registrarComparendoPage.clickBotonRegistrarComparendo();
        // Adicionamos las validaciones despues de la creación
        expect(element(by.className('swal2-success')).isPresent()).toEqual(true);
    
           
       
    });

    /* it('Deberia crear producto', () => {
        const ID_PRODUCTO = '001';
        const DESCRIPCION_PRODUCTO = 'Producto de pruebas';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonCrearProductos();
        producto.ingresarId(ID_PRODUCTO);
        producto.ingresarDescripcion(DESCRIPCION_PRODUCTO);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar productos', () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonListarProductos();

        expect(4).toBe(producto.contarProductos());
    }); */
});
