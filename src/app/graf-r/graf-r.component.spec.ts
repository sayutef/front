import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafRComponent } from './graf-r.component';

describe('GrafRComponent', () => {
  let component: GrafRComponent;
  let fixture: ComponentFixture<GrafRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrafRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
