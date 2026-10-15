import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventDetail } from './event-detail';

describe('EventDetail', () => {
  let component: EventDetail;
  let fixture: ComponentFixture<EventDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(EventDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
