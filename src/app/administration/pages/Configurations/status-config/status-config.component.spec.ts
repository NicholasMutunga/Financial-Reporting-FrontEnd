import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusConfigComponent } from './status-config.component';

describe('StatusConfigComponent', () => {
  let component: StatusConfigComponent;
  let fixture: ComponentFixture<StatusConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
