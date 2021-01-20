import { CharacterService, Character } from './../../character.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.scss']
})
export class CharacterDescriptionComponent implements OnInit {
  character$: Observable<Character> | undefined;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.character$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.characterService.getCharacter(params.get('id') || '{}'))
    );
  }

}
