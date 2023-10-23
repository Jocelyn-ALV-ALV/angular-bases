import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(public dbzService: DbzService){}

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete:  EventEmitter<string> = new EventEmitter();

  deleteCharacterById(id: string): void {
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(id);
  }

}
