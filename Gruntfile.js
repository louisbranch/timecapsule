module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    regarde: {
      app: {
        files: ['main.js', 'modules/**/*.js', 'test/**/*.js'],
        tasks: ['test']
      }
    },
    jshint: {
      files: '<%= regarde.app.files %>'
    }
  });

  // Tasks
  grunt.registerTask('default', 'regarde');
  grunt.registerTask('test', ['jshint']);

  // Load Dependencies
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

};
