import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponetComponent } from './list-componet.component';

describe('ListComponetComponent', () => {
  let component: ListComponetComponent;
  let fixture: ComponentFixture<ListComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
