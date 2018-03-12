import { UsersService } from './../../services/users.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor (private _userServices: UsersService){

  }

  ngOnInit(){
    this.users = this._userServices.innactiveUsers;
  }

  onSetToActive(id: number) {
    this._userServices.setToActive(id);
  }
}
