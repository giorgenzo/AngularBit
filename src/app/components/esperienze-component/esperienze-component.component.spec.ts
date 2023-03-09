import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperienzeComponentComponent } from './esperienze-component.component';

describe('EsperienzeComponentComponent', () => {
  let component: EsperienzeComponentComponent;
  let fixture: ComponentFixture<EsperienzeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsperienzeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsperienzeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
