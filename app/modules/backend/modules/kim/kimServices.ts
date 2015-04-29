module frontend.kim.services {
    export var kimServices = [() => {
        return new KimServices();
    }];

    export class KimServices {
        
        constructor(){}

        public getName(): string {
            return 'Kim Egede Jakobsen';
        }
    }
}