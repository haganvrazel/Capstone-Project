import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicUpdateComponent } from './electronic-update.component';

describe('ElectronicUpdateComponent', () => {
  let component: ElectronicUpdateComponent;
  let fixture: ComponentFixture<ElectronicUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
