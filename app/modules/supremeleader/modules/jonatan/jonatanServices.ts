module frontend.jonatan.services {
    export var jonatanServices = [() => {
        return new JonatanServices();
    }];

    export class JonatanServices {
        
        constructor(){}

        public getName(): string {
            return 'Jonatan Trolle';
        }
    }
}