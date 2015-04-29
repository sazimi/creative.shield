module frontend.alexandra.services {
    export var alexandraServices = [() => {
        return new AlexandraServices();
    }];

    export class AlexandraServices {
        
        constructor(){}

        public getName(): string {
            return 'Alexandra Moldovan';
        }
    }
}