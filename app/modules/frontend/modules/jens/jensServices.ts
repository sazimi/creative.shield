module frontend.jens.services {
    export var jensServices = [() => {
        return new JensServices();
    }];

    export class JensServices {
        
        constructor(){}

        public getName(): string {
            return 'Jens Svensson';
        }
    }
}