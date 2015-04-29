module frontend.sherry.services {
    export var sherryServices = [() => {
        return new SherryServices();
    }];

    export class SherryServices {
        
        constructor(){}

        public getName(): string {
            return 'Sherry Aziminia';
        }
    }
}