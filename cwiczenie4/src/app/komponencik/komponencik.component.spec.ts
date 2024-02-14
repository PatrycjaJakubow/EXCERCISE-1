import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponencikComponent } from './komponencik.component';

describe('KomponencikComponent', () => {
  let component: KomponencikComponent;
  let fixture: ComponentFixture<KomponencikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KomponencikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KomponencikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
