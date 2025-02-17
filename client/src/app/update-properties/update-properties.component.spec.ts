import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePropertyComponent } from './update-properties.component';

describe('UpdatePropertyComponent', () => {
  let component: UpdatePropertyComponent;
  let fixture: ComponentFixture<UpdatePropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePropertyComponent]
    });
    fixture = TestBed.createComponent(UpdatePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});