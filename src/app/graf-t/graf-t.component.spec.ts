import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafTComponent } from './graf-t.component';

describe('GrafTComponent', () => {
  let component: GrafTComponent;
  let fixture: ComponentFixture<GrafTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrafTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
