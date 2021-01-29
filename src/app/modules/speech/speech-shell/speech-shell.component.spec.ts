import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechShellComponent } from './speech-shell.component';

describe('SpeechShellComponent', () => {
  let component: SpeechShellComponent;
  let fixture: ComponentFixture<SpeechShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
