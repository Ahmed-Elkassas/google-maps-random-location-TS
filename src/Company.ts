import { Mappable } from './CustomMap';
import { randCompanyName, randBrand, randLatitude, randLongitude  } from '@ngneat/falso';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.companyName = randCompanyName();
        this.catchPhrase = randBrand();
        this.location = {
            lat: randLatitude(),
            lng: randLongitude()
        }
    }

    markerContent(): string {
        return `
            <div>
                <h2>Company Name: ${this.companyName}</h2>
                <h3>brand: ${this.catchPhrase}</h3>
            </div>
        `
    }
}