import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicItemComponent } from './electronic-item.component';

describe('ElectronicItemComponent', () => {
  let component: ElectronicItemComponent;
  let fixture: ComponentFixture<ElectronicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
