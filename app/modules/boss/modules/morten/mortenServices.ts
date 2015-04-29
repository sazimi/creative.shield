module frontend.morten.services {
    export var mortenServices = [() => {
        return new MortenServices();
    }];

    export class MortenServices {
        
        constructor(){}

        public getName(): string {
            return 'Morten Trolle';
        }
    }
}