import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alerte } from './alerte';

describe('Alerte', () => {
  let component: Alerte;
  let fixture: ComponentFixture<Alerte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alerte],
    }).compileComponents();

    fixture = TestBed.createComponent(Alerte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
