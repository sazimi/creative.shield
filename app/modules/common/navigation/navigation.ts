module Common {
    export class Navigation {
        constructor(
            public title?: string,
            public state?: string,
            public icon?: string,
            public children?: Navigation[]
            ){}
    }
}