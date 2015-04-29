module frontend.hristo.services {
    export var hristoServices = [() => {
        return new HristoServices();
    }];

    export class HristoServices {
        
        constructor(){}

        public getName(): string {
            return 'Hristo Petev';
        }
    }
}