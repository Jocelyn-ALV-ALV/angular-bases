import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'; //paquete que genera ID unicos

import { Character } from '../interfaces/character.interface';


@Injectable({ //decorador (esto le dice a angular que es un service)
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'goku',
    power: 9500
  },
  {
    id: uuid(),
    name:'Vegeta',
    power: 7500
  }
  ];

  addCharacter(character: Character): void{
    const newCharacter: Character ={ id: uuid(), ...character}

    this.characters.push(newCharacter);
  }

  /*onDeleteCharacter(index: number){
    this.characters.splice(index, 1)
  }*/

  deleteCharacterById( id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }

}
