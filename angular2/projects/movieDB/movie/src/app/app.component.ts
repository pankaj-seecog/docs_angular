import { Component } from '@angular/core';
import {Movie} from './services/movie.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [Movie]
})
export class AppComponent {
  title = 'app works!';
}
