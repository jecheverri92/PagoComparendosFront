import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComparendoComponent } from './listar-comparendo.component';

describe('ListarComparendoComponent', () => {
  let component: ListarComparendoComponent;
  let fixture: ComponentFixture<ListarComparendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComparendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComparendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
