import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgentService } from 'src/app/services/agent.service';

import { SearchAgentComponent } from './search-agent.component';
import { AgentsList } from 'src/app/services/AgentsList';

export class MockAgentService {
  agentsUrl: string = `https://api.ratemyagent.com.au/autosearch/agents`

  constructor() { }

  public searchResults(text: string) { }
}

describe('SearchAgentComponent', () => {
  let component: SearchAgentComponent;
  let fixture: ComponentFixture<SearchAgentComponent>;
  let searchResultsSpy: jasmine.Spy;
  let service: AgentService;

  let agentList = {
    "Name": "Neil Wallis",
    "SecondaryName": "ELDERS LOBETHAL",
    "ImageUrl": "https://cdn.ratemyagent.com.au/thumbs/02469920-4bc5-e911-8f1a-026ec1232bbc"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchAgentComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provides: AgentService, useClass: MockAgentService
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    service = TestBed.inject(AgentService);
    searchResultsSpy = spyOn(service, 'searchResults');
  });

  it('should call searchResults() when searchAgents() is called', () => {
    component.searchAgents('john');
    expect(searchResultsSpy).toHaveBeenCalled();
  });
});
