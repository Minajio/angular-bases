import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    standalone: false,
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
      return this.dbzService.characters;
  }

  newCharacter(character: Character):void {
      this.dbzService.newCharacter(character);
  }

  deleteCharacter(id: string): void{
      this.dbzService.deleteCharacter(id);
  }

  buttonPress(): void{
    const datos = {
      numero: 9,
      cadena: "holi"
    }

    const event = new CustomEvent('eventoCustom', {detail: datos});

    window.parent.document.dispatchEvent(event);
  }
}
