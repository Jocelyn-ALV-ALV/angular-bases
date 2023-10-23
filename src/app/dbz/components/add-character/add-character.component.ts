import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {


  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power: 0
  }

  emitCharacter():void{
    console.log(this.character)
    if (this.character.name.length === 0) return; //Si el nombre viene vacio, no lo acepto

    this.onNewCharacter.emit(this.character); //Si tiene nombre llamo al evento, dentro debó emitir algo de tipo character

    this.character = {name: '', power: 0}; //Esto hace que los valores del formulario regresen a estar vacios

  }
}
