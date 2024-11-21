import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTopsellingComponent } from './carousel-topselling.component';

describe('CarouselTopsellingComponent', () => {
  let component: CarouselTopsellingComponent;
  let fixture: ComponentFixture<CarouselTopsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselTopsellingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselTopsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
