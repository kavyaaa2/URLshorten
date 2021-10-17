import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllUrlComponent } from './show-all-url.component';

describe('ShowAllUrlComponent', () => {
  let component: ShowAllUrlComponent;
  let fixture: ComponentFixture<ShowAllUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
