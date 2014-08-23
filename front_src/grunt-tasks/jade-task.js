/**
 * Created by riffdiktator on 23.08.2014.
 */
module.exports = function(grunt){
    grunt.config('jade',{
        compile: {
            options: {
                data: {
                    debug: false
                },
                pretty: true
            },
            files: [{
                cwd: "pages",
                src: "**/*.jade",
                dest: "../public",
                expand: true,
                ext: ".html"
            }]
        }
    })
}