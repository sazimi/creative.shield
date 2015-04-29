module frontend.miglena.services {
    export var miglenaServices = [() => {
        return new MiglenaServices();
    }];

    export class MiglenaServices {
        
        constructor(){}

        public getName(): string {
            return 'Miglena Zlatanova';
        }
    }
}