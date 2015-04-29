module frontend.emil.services {
    export var emilServices = [() => {
        return new EmilServices();
    }];

    export class EmilServices {
        
        constructor(){}

        public getName(): string {
            return 'Emil Møller';
        }
    }
}