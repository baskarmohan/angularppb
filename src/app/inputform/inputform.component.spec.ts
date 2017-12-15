import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputformComponent } from './inputform.component';

describe('InputformComponent', () => {
  let component: InputformComponent;
  let fixture: ComponentFixture<InputformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});