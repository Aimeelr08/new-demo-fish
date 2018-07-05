'use strict'

// http://ericnish.io/blog/how-to-neatly-separate-grunt-files
// http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/
// discuss how to break up gruntfiles

module.exports = function (grunt) {
  require('time-grunt')(grunt)
  require('load-grunt-config')(grunt)
  grunt.loadNpmTasks('grunt-serve');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'script/main.js',
        dest: 'tmp/main.min.js'
      }
    }
  })

  // // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify')
  //
  // // Default task(s).
  // grunt.registerTask('default', ['uglify'])
}
