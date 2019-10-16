import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeItemsComponent } from './poke-items.component';

describe('PokeItemsComponent', () => {
  let component: PokeItemsComponent;
  let fixture: ComponentFixture<PokeItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
