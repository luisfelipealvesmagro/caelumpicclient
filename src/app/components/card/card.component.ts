import { Component, Input} from '@angular/core';

@Component({
  selector: '[card]',
  templateUrl: '../card/card.component.html',
  styleUrls: ['../card/card.component.css']
})
export class CardComponent {
  @Input() titulo;
  @Input() descricao;
}
