module frontend.travis.services {
    export var travisServices = [() => {
        return new TravisServices();
    }];

    export class TravisServices {
        
        constructor(){}

        public getName(): string {
            return 'Travis Elkins';
        }
    }
}