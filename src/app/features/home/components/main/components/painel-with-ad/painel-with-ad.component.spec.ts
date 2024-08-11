import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelWithAdComponent } from './painel-with-ad.component';

describe('PainelWithAdComponent', () => {
  let component: PainelWithAdComponent;
  let fixture: ComponentFixture<PainelWithAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelWithAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelWithAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
