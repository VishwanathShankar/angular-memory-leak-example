import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponenetComponent } from './sub-componenet.component';

describe('SubComponenetComponent', () => {
  let component: SubComponenetComponent;
  let fixture: ComponentFixture<SubComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
