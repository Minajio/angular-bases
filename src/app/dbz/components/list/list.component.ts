import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public deleteEventEmitter: EventEmitter<string> = new EventEmitter();

  @Input()
  public listOfCharacters: Character[] = [];
  
  removeCharacterById(id: string): void{
    this.deleteEventEmitter.emit(id);
  }
}
