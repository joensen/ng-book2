import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuriComponent } from './suri.component';

describe('SuriComponent', () => {
  let component: SuriComponent;
  let fixture: ComponentFixture<SuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
