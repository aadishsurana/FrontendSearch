import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { IAgent } from 'src/app/services/IAgent';

@Component({
  selector: 'app-search-agent',
  templateUrl: './search-agent.component.html',
  styleUrls: ['./search-agent.component.scss']
})
export class SearchAgentComponent implements OnInit {

  AgentsList: IAgent[];

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
  }

  searchAgents(searchText: string) {
    let allAgents = this.agentService.searchResults(searchText).subscribe(data => {
      this.AgentsList = data.Results.slice(0, 10);
    });
  }

}
