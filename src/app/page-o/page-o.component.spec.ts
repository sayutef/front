import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOComponent } from './page-o.component';

describe('PageOComponent', () => {
  let component: PageOComponent;
  let fixture: ComponentFixture<PageOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
