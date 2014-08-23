/**
 * Created by riffdiktator on 22.08.2014.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: require('./package.json')
    })

    grunt.loadTasks('grunt-tasks');
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['jade','compass','concat','uglify','connect','watch']);
}