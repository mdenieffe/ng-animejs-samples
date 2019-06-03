import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRotatorComponent } from './message-rotator.component';

describe('MessageRotatorComponent', () => {
  let component: MessageRotatorComponent;
  let fixture: ComponentFixture<MessageRotatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [MessageRotatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
