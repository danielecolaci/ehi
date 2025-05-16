import { Component } from '@angular/core';
import { Member, MEMBERS } from '../../members';

@Component({
  selector: 'app-old-version',
  imports: [],
  templateUrl: './old-version.component.html',
  styleUrl: './old-version.component.css'
})
export class OldVersionComponent {
  title = 'ehi';
  members: Member[] = MEMBERS.sort(() => Math.random() - 0.5);
  constructor() {}
}
