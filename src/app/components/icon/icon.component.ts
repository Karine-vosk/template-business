import {Component, Input, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';


import { CheckOutline, CloseOutline } from '@ant-design/icons-angular/icons'; // Import icons you want to use
import { NzIconModule } from 'ng-zorro-antd/icon';

import { MailOutline, AlertOutline, FacebookOutline, TwitterOutline } from '@ant-design/icons-angular/icons';
@Component({
  selector: 'app-icon',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, MatCardModule, NzIconModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() iconType: string = '';
  @Input() isBox: boolean = true;
  @Input() iconColor: string = '';

  mail = AlertOutline.name;
  closeIcon = CloseOutline.name;

  isCollapsed: boolean = true
  chname = CheckOutline.name;
  fb = FacebookOutline.name;
  twitter = TwitterOutline.name
  
}
