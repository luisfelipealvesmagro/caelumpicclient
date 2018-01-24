import { Http, Headers, Response} from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FotoComponent } from '../components/foto/foto.component';

@Injectable()
export class FotoService {

    http: Http
    URL: string = 'http://localhost:3000'
    cabecalho: Headers

    constructor(http: Http){
        this.http = http
        this.cabecalho = new Headers()
        this.cabecalho.append('Content-type', 'application/json')
    }

    listar(): Observable<FotoComponent[]> {
        return this.http
        .get(`${this.URL}/v1/fotos`)
        .map((dados) => dados.json())
    }

    exibir(_id: string): Observable<FotoComponent> {
        return this.http
        .get(`${this.URL}/v1/fotos/${_id}`)
        .map((dados) => dados.json())
    }

    adicionar(foto: FotoComponent): Observable<Response> {
        return this.http
        .post(
            `${this.URL}/v1/fotos`,
            JSON.stringify(foto),
            {headers: this.cabecalho}
        )
    }

    excluir(foto: FotoComponent): Observable<Response> {
        return this.http
        .delete(`${this.URL}/v1/fotos/${foto._id}`)
    }

    editar(foto: FotoComponent): Observable<Response> {
        return this.http
        .put(
            `${this.URL}/v1/fotos/${foto._id}`,
            JSON.stringify(foto),
            {headers: this.cabecalho}
        )
    }

}