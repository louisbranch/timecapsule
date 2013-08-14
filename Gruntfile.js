module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    regarde: {
      app: {
        files: ['main.js', 'modules/**/*.js', 'test/**/*.js', 'assets/**/*.less'],
        tasks: ['test', 'jshint', 'recess']
      }
    },
    jshint: {
      files: ['main.js', 'modules/**/*.js', 'test/**/*.js'],
    },
    recess: {
      default: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'public/main.min.css' : ['assets/less/**/*.less']
        }
      }
    },
    shell: {
      'mocha-phantomjs': {
        command: 'mocha-phantomjs -R dot http://localhost:8080/test/index.html',
        options: {
          stdout: true,
          stderr: true
        }
      }
    }
  });

  // Tasks
  grunt.registerTask('default', ['regarde']);
  grunt.registerTask('test', ['shell:mocha-phantomjs']);

  // Load Dependencies
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-shell');

};
