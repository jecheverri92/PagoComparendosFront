import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparendoComponent } from './comparendo.component';

describe('ComparendoComponent', () => {
  let component: ComparendoComponent;
  let fixture: ComponentFixture<ComparendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
