/**
 * Created by riffdiktator on 23.08.2014.
 */
module.exports = function(grunt){

    grunt.config('concat',{
        core: {
            src: [
                'scripts/core/jquery-1.11.1.js',
                'scripts/core/angular.min.js',
                'scripts/modules/**/*.js'
            ],
            dest: 'scripts/build/core.js'
        },
        app: {
            src: [
                'scripts/controllers/**/*.js'
            ],
            dest: 'scripts/build/app.js'
        }
    })

};