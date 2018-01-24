import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filtrarPorTitulo'
})
export class FiltrarPorTituloPipe implements PipeTransform{
    transform(fotos, param) {
         
        const lista = fotos.filter(function(foto){
            if (foto.titulo) {
                return foto.titulo.toUpperCase().includes(param.toUpperCase())
            } 
        })
        return lista
    }
}