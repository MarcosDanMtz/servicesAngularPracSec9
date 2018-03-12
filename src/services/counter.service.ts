export class CounterSerice{
    activeToInactive = 0;
    inctiveToActive = 0;

    incrementActiveToInactive(){
        this.activeToInactive++;
        console.log('Increment Active', this.activeToInactive);
    }

    incrementInactiveToActive(){
        this.inctiveToActive++;
        console.log('increment Innactive', this.inctiveToActive);
    }
}