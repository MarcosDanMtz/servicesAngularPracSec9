import { CounterSerice } from './counter.service';
import { Injectable } from "@angular/core";

@Injectable()
export class UsersService{
    activeUsers = ['Carld', 'Marx', 'Pedro'];
    innactiveUsers = ['Lola', 'Karen', 'Rosa'];
    constructor(private _counterService: CounterSerice){}
    setToActive(id: number){
        this.activeUsers.push(this.innactiveUsers[id]);
        this.innactiveUsers.splice(id, 1);
        this._counterService.incrementActiveToInactive(); 
    }

    setToInavtive(id: number){
        this.innactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this._counterService.incrementInactiveToActive();
    }

    
}

