import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/services/alert.service';

import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  faTimes = faTimes;

  constructor(public alertServices: AlertService) { }

  ngOnInit(): void {

  }

}
