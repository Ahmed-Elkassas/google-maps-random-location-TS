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
}