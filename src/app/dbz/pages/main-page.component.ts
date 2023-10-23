import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  constructor( private dbzService: DbzService){ //Inyeccioón de dependencias
  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeteleCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character){
    this.dbzService.addCharacter(character);
  }

}
