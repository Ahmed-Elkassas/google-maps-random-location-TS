import { randCompanyName, randBrand, randLatitude, randLongitude  } from '@ngneat/falso';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lug: number
    }

    constructor() {
        this.companyName = randCompanyName();
        this.catchPhrase = randBrand();
        this.location = {
            lat: randLatitude(),
            lug: randLongitude()
        }
    }
}