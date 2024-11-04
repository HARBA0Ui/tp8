import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './../model/game';

const API_URL = 'http://localhost:3000/games';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}
  private readonly http: HttpClient = inject(HttpClient);

  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(API_URL);
  }

  public addGame(p: Game): Observable<Game> {
    return this.http.post<Game>(API_URL, p)
  }
}
