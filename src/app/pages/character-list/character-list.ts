import { CharacterService } from './../../character.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.scss']
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<Character[]> | undefined;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characters$ = this.characterService.getCharacters();
  }

}
