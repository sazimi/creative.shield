'use strict';
var GulpConfig = (function() {
    function GulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.sourceApp = 'app/';

        this.tsOutputPath = this.sourceApp + '/modules';
        this.allJavaScript = [this.sourceApp + '/modules/{,*/}*.js'];
        this.allTypeScript = [this.sourceApp + '**/{,*/}*.ts'];

        this.typings = '../typings/';
        this.libraryTypeScriptDefinitions = '../typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'tsd.d.ts';
    }
    return GulpConfig;
})();
module.exports = GulpConfig;
