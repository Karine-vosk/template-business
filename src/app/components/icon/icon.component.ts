import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() iconName: string = '';
  @Input() isBox: boolean = false;
  @Input() iconColor: string = '';
}
