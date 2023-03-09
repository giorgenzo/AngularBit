import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageComponentComponent } from './language-component.component';

describe('LanguageComponentComponent', () => {
  let component: LanguageComponentComponent;
  let fixture: ComponentFixture<LanguageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
