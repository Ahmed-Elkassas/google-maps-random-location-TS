import { Mappable } from './CustomMap';
import {randFullName, randLatitude , randLongitude } from '@ngneat/falso';

export class User implements Mappable {
    name: string;   
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = randFullName();
        this.location = {
            lat: randLatitude(),
            lng: randLongitude()
        }
    }
    markerContent(): string {
        return `
            <div>
                <h2>User Name: ${this.name}</h2>
            </div>
        `
    }
}

