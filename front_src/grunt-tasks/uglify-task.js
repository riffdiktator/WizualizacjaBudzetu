/**
 * Created by riffdiktator on 23.08.2014.
 */
module.exports = function(grunt){

    grunt.config('uglify',{


        my_target: {
            files: {
                '../public/scripts/core.js': ['scripts/build/core.js'],
                '../public/scripts/app.js': ['scripts/build/app.js']
            }
        }
})};