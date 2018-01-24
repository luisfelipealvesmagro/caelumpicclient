import { Component } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { FotoService } from '../../services/FotoService'
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto : FotoComponent
  form : FormGroup

  constructor(rota: ActivatedRoute, private fotoService : FotoService, private formBuilder: FormBuilder) {
       
    this.foto = new FotoComponent()
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      url: ['', Validators.required],
      descricao: ['', Validators.required]
    })

    rota.params.subscribe((parametros) => {
      if (parametros.id) {
        this.fotoService.exibir(parametros.id).subscribe((data) => {
          this.foto = data;
        })
      }
    })
  }
  
  salvar(event){
    event.preventDefault()

    console.log('form valido', this.form.valid)

    if (this.foto._id){
      this.fotoService.editar(this.foto).subscribe((data) => {
        this.foto = new FotoComponent()
      })
    } else {
      this.fotoService.adicionar(this.foto).subscribe((data) => {
        this.foto = new FotoComponent()
      })
    }
  }

}
