import { Component,  OnInit } from '@angular/core';
import { notifications, messages } from '../shared/shared.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMessages = false;
  showNotifications = false;
  showUserMenu = false;

  _notifications = notifications;
  _messages = messages;

  constructor() { }
  closeAllOpenSelected( menuName:string )
  {
    if (menuName === 'messages')
    {
      this.showMessages = !this.showMessages;
      this.showNotifications = false;
      this.showUserMenu = false;
    }
    else if (menuName === 'notifications')
    {
      this.showMessages = false;
      this.showNotifications =!this.showNotifications;
      this.showUserMenu = false;
    }
    else if (menuName === 'user')
    {
      this.showMessages = false;
      this.showNotifications = false;
      this.showUserMenu = !this.showUserMenu;
    }
    
  }
  ngOnInit(): void {
  }

}
