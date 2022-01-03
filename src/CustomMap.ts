import { User } from './User';
import { Company } from './Company';

// instructions to every class on how they can be an argument to 'addMarker'
interface Mappable {
  content: string;
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    
    const content = mappable.content;
    const infowindow = new google.maps.InfoWindow({ content });
    marker.addListener('click', () => {
      infowindow.open(this.googleMap, marker);
    });
  }
}
