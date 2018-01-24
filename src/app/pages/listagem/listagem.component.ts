import { Component } from '@angular/core';
import { FotoService } from '../../services/FotoService'
import { FotoComponent } from '../../components/foto/foto.component';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  
  fotos: Array<FotoComponent> = []
  fotoService: FotoService

  constructor(fotoService : FotoService){
    
    fotoService.listar().subscribe((data) => {
      this.fotos = data;
      this.fotoService = fotoService
    })

  }

  excluirFoto(foto: FotoComponent) {
    this.fotoService.excluir(foto).subscribe((data) => {
      console.log(data);
      const fotosAtualizadas = this.fotos.filter(function(item){
        return item._id !== foto._id
      })
      this.fotos = fotosAtualizadas
    })

  }

}
