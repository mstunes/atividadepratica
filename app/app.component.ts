import { Component } from '@angular/core';
import { aluno } from './arquivo'; //vai importar a partir de arquivo.ts

@Component({
  selector: 'app-root', //seletor
  templateUrl: './app.component.html', //endereço para o layout html
  styleUrls: ['./app.component.css'], // endereço para o os estilos de css
})
export class AppComponent {
  //exportando a classe principal
  title = 'atividadeunt';
  alunos_lista = aluno;
}
