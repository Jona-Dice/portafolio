import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioItemComponent } from './portafolio-item.component';

describe('PortafolioItemComponent', () => {
  let component: PortafolioItemComponent;
  let fixture: ComponentFixture<PortafolioItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortafolioItemComponent]
    });
    fixture = TestBed.createComponent(PortafolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
