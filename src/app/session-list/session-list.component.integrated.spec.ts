import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../services/auth.service';
import { VoterService } from '../services/voter.service';
import { UpvoteComponent } from '../upvote/upvote.component';
import { DurationPipe } from '../pipes/duration.pipe';
import { CollapsibleComponent } from '../shared/collapsible/collapsible.component';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
      component: SessionListComponent,
      element: HTMLElement,
      debugEl: DebugElement;

  beforeEach(async(() => {

    const mockAuthService = {
      isAuthenticated: () => true,
      username: { username: 'John' }
    };
    const mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        // UpvoteComponent,
        DurationPipe,
        // CollapsibleComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('Initial display', () => {

    it('should have the correct session title', () => {
      component.sessions = [
        { id: 3, name: 'Session 1',
        presenter: 'Max', duration: 1,
        level: 'beginner', abstract: 'abstract',
        voters: ['timmy', 'james'] }
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[collapse-title]').textContent)
        .toContain('Session 1');
    });

  });

});
