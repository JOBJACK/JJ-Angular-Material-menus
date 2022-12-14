import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IconService } from './icon.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private iconService: IconService) {}
  disableSelect = new FormControl(false);
}
