import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  profileInfo = environment.profileInfo;
  contactDetails = environment.contactDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
