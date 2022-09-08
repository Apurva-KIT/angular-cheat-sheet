import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareConactsComponent } from './compare-conacts.component';

describe('CompareConactsComponent', () => {
  let component: CompareConactsComponent;
  let fixture: ComponentFixture<CompareConactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareConactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareConactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
