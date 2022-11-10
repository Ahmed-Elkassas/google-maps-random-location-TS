import {randFullName, randLatitude , randLongitude } from '@ngneat/falso';

export class User {
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
}

