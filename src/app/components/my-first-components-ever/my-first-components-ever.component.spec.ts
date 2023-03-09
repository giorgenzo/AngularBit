import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComponentsEverComponent } from './my-first-components-ever.component';

describe('MyFirstComponentsEverComponent', () => {
  let component: MyFirstComponentsEverComponent;
  let fixture: ComponentFixture<MyFirstComponentsEverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstComponentsEverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstComponentsEverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
