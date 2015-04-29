module frontend.helle.services {
    export var helleServices = [() => {
        return new HelleServices();
    }];

    export class HelleServices {
        
        constructor(){}

        public getName(): string {
            return 'Helle Kibsgaard';
        }
    }
}