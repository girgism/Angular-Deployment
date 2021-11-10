import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPublisherComponent } from './signup-publisher.component';

describe('SignupPublisherComponent', () => {
  let component: SignupPublisherComponent;
  let fixture: ComponentFixture<SignupPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
