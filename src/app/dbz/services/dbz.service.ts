import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    agregarPersonaje(argumentoPersonaje: Personaje){
        this._personajes.push(argumentoPersonaje);
    }

	private _personajes: Personaje[] = [
		{
			nombre: 'Goku',
			poder: 1500
		},
		{
			nombre: 'Vegeta',
			poder: 750,
		}
	];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
}