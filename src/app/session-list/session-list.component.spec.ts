import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListComponent } from './session-list.component';
import { ISession } from '../model/event.model';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;
  const mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {

    it('should filter the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'session1', level: 'intermediate' },
        { name: 'session2', level: 'beginner' },
        { name: 'session3', level: 'advanced' }];
        component.filterBy = 'intermediate';
        component.sortBy = 'name';
        component.eventId = 3;
        component.ngOnChanges();

        expect(component.visibleSessions.length).toBe(1);
    });

    it('should sort the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'session1', level: 'intermediate' },
        { name: 'session3', level: 'beginner' },
        { name: 'session2', level: 'advanced' }];
        component.filterBy = 'all';
        component.sortBy = 'name';
        component.eventId = 3;
        component.ngOnChanges();

        expect(component.visibleSessions[2].name).toBe('session3');
    });

  });

});
