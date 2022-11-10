/// <reference types="@types/google.maps" />


// !  because of this Error => Argument of type 'HTMLElement | null' is not assignable to parameter of type 'HTMLElement'.
 //  Type 'null' is not assignable to type 'HTMLElement'
new google.maps.Map(document.getElementById('maps')!, {
    zoom: 1,
   center:  {
    lat: 0,
     lng: 0
}
})