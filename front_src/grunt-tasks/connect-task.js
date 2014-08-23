/**
 * Created by riffdiktator on 23.08.2014.
 */
module.exports = function(grunt){

    grunt.config('connect',{
        server: {
            options: {
                port: 8888,
                base: '../public',
                livereload: true
            }
        }
    })
}