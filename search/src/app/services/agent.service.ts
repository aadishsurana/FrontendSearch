import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { AgentsList } from './AgentsList';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IAgent } from './IAgent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  // Need API url here
  private agentsUrl: string = ''
  constructor(private httpClient: HttpClient) { }

  public searchResults(text: string): Observable<AgentsList> {
    text = text.trim();
    const options = text ? { params: new HttpParams().set('SearchTerm', text) } : {};

    return this.httpClient.get<AgentsList>(this.agentsUrl, options);
  }
}
