import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunityPage } from './community-page';

describe('CommunityPage', () => {
  let component: CommunityPage;
  let fixture: ComponentFixture<CommunityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
