import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestIdeaComponent } from './suggest-idea.component';

describe('SuggestIdeaComponent', () => {
  let component: SuggestIdeaComponent;
  let fixture: ComponentFixture<SuggestIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestIdeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
