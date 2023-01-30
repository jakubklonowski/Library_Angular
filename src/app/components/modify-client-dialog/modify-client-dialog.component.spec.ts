import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyClientDialogComponent } from './modify-client-dialog.component';

describe('ModifyClientDialogComponent', () => {
  let component: ModifyClientDialogComponent;
  let fixture: ComponentFixture<ModifyClientDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyClientDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyClientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
