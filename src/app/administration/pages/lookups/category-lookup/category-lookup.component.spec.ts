import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLookupComponent } from './category-lookup.component';

describe('CategoryLookupComponent', () => {
  let component: CategoryLookupComponent;
  let fixture: ComponentFixture<CategoryLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
