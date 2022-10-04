import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CategsStoreComponent } from './categs-store.component';

describe('Categs Store Component', () => {
  let component: CategsStoreComponent;
  let fixture: ComponentFixture<CategsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategsStoreComponent ],
      imports : [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait être ok', () => {
    expect(component).toBeTruthy();
  });
});
