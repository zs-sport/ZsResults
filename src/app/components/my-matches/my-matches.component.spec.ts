import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatchesComponent } from './my-matches.component';

describe('MatchesComponent', () => {
  let component: MyMatchesComponent;
  let fixture: ComponentFixture<MyMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
