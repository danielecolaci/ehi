import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MEMBERS, Member } from '../members';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class AppComponent {
  title = 'ehi';
  members: Member[] = MEMBERS.sort(() => Math.random() - 0.5);
  constructor() { }
}