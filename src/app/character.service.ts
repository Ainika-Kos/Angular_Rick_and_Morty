import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})

export class CharacterService {

  allCharactersURL = 'https://rickandmortyapi.com/api/character/?page=19';
  singleCharacterURL = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.allCharactersURL).pipe(pluck('results'));
  }

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(this.singleCharacterURL + id).pipe();
  }
}
