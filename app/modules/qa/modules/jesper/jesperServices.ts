module frontend.jesper.services {
    export var jesperServices = [() => {
        return new JesperServices();
    }];

    export class JesperServices {
        
        constructor(){}

        public getName(): string {
            return 'Jesper Bülow Andersen';
        }
    }
}