import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicStoreComponent } from './electronic-store.component';

describe('ElectronicStoreComponent', () => {
  let component: ElectronicStoreComponent;
  let fixture: ComponentFixture<ElectronicStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
