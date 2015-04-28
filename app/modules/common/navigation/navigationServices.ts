/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="navigation.ts" />

module Common.Services{

    export var navigationServices = [
        () => {
            return new NavigationServices();
        } 
    ]

    export class NavigationServices {
        
        private navigationList: Navigation[] = [];

        public setItem(item: Navigation) {
            this.navigationList.push(item);
        }

        public getItems() {
            return this.navigationList;
        }

    }
}