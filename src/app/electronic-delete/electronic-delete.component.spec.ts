import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicDeleteComponent } from './electronic-delete.component';

describe('ElectronicDeleteComponent', () => {
  let component: ElectronicDeleteComponent;
  let fixture: ComponentFixture<ElectronicDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
