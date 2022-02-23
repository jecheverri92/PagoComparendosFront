import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarComparendoComponent } from './registrar-comparendo.component';

describe('RegistrarComparendoComponent', () => {
  let component: RegistrarComparendoComponent;
  let fixture: ComponentFixture<RegistrarComparendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarComparendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarComparendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
