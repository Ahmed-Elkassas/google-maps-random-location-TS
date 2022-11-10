import {randFullName, randLatitude , randLongitude } from '@ngneat/falso';

export class User {
    name: string;   
    location: {
        lat: number,
        lug: number
    }

    constructor() {
        this.name = randFullName();
        this.location = {
            lat: randLatitude(),
            lug: randLongitude()
        }
    }
}

