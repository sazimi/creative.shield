module frontend.nima.services {
    export var nimaServices = [() => {
        return new NimaServices();
    }];

    export class NimaServices {
        
        constructor(){}

        public getName(): string {
            return 'Nima Zahedi';
        }
    }
}