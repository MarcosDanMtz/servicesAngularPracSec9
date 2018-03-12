import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private _userServices: UsersService){
  }

  ngOnInit(){
    this.users = this._userServices.activeUsers;
  }
  onSetToInactive(id: number) {
    this._userServices.setToInavtive(id);
  }
}
