import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { RestfulService } from '../Services/restful.service';

declare const L: any;

@Component({
  selector: 'app-functionalities',
  templateUrl: './functionalities.component.html',
  styleUrls: ['./functionalities.component.css'],
})
export class FunctionalitiesComponent implements OnInit {
  private restfulService: RestfulService;
  private authService: SocialAuthService;

  constructor(restfulService: RestfulService, authService: SocialAuthService) {
    this.restfulService = restfulService;
    this.authService = authService;
  }

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        // lat = 31.481327;
        // long = 74.302817;

        console.log('Latitude: ' + lat + ', Longitute: ' + long);
        let mymap = L.map('mapid').setView([lat, long], 14);

        let accessToken =
          'pk.eyJ1IjoibWFobWFkcmFmaXF1ZSIsImEiOiJja3EzdnB3aGUwcTBmMnBuenpyenlpbDluIn0.uISms5QMe33z6qeRZnAflA';
        L.tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token',
          }
        ).addTo(mymap);

        let marker = L.marker([lat, long]).addTo(mymap);
      });
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((res) => {
      console.log(res);
      alert('Name: ' + res.name + '\nEmail: ' + res.email);
    });
  }

  public btn_LoginWithGoogle(event: any): any {
    this.signInWithGoogle();
  }

  public btn_ShareOnFacebook(event: any): any {
    this.signInWithGoogle();
  }
}
