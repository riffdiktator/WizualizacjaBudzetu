/**
 * Created by riffdiktator on 23.08.2014.
 */
module.exports = function(grunt){

    grunt.config('compass',{
        dist: {
            options: {
                sassDir: 'sass',
                cssDir: '../public/stylesheets',
                environment: 'production'
            }
        }
    })

}