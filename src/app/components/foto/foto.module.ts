import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import {FiltrarPorTituloPipe } from './filtrarPorTitulo.pipe'

@NgModule({
    declarations: [ FotoComponent, FiltrarPorTituloPipe ],
    exports: [ FotoComponent, FiltrarPorTituloPipe ]
})
export class FotoModule {}