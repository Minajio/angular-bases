import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: v4(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: v4(),
      name: 'Goku',
      power: 9500
    }
];
  
  newCharacter(character: Character): void{
    this.characters.push({id: v4(), ...character});
    console.log(this.characters);
  }

  deleteCharacter(id: string): void{
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
