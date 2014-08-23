/**
 * Created by riffdiktator on 23.08.2014.
 */
module.exports = function(grunt){

    grunt.config('watch',{
        css: {
            files: ['sass/**/*.scss'],
            tasks: ['compass'],
            options: {
                spawn: false,
                livereload: true
            }
        },
        html: {
            files: ['pages/**/*.jade'],
            tasks: ['newer:jade'],
            options: {
                spawn: false,
                livereload: true
            }
        },
        scripts: {
            files: ['scripts/**/*.js'],
            tasks: ['newer:concat'],
            options: {
                spawn: false,
                livereload: true
            }
        }
    })

};