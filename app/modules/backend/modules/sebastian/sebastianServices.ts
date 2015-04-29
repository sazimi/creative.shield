module frontend.sebastian.services {
    export var sebastianServices = [() => {
        return new SebastianServices();
    }];

    export class SebastianServices {
        
        constructor(){}

        public getName(): string {
            return 'Sebastian Burgquist';
        }
    }
}