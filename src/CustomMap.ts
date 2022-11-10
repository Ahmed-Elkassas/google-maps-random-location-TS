import { Company } from './Company';
import { User } from './User';
/// <reference types="@types/google.maps" />

export  class CustomMaps {
   private googleMap: google.maps.Map;

    constructor(divId: string) {
        // !  because of this Error => Argument of type 'HTMLElement | null' is not assignable to parameter of type 'HTMLElement'.
        // Type 'null' is not assignable to type 'HTMLElement'
        this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
            zoom: 1,
           center:  {
            lat: 0,
             lng: 0
        }
        })
    }

    addUserMarker(user: User) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
        })
    }
    addCompanyMarker(company: Company) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: company.location.lat,
                lng: company.location.lng
            }
        })
    }
}