import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceCardComponent } from './cource-card.component';

describe('CourceCardComponent', () => {
  let component: CourceCardComponent;
  let fixture: ComponentFixture<CourceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
