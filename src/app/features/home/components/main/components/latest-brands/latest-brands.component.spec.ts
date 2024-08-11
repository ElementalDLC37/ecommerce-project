import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBrandsComponent } from './latest-brands.component';

describe('LatestBrandsComponent', () => {
  let component: LatestBrandsComponent;
  let fixture: ComponentFixture<LatestBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
