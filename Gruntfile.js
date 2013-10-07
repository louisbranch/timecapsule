module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    regarde: {
      js: {
        files: ["assets/js/main.js", "assets/js/modules/**/*.js", "test/**/*.js"],
        tasks: ["shell:mocha-phantomjs", "jshint", "shell:rjs"]
      },
      css: {
        files: ["assets/less/**/*.less"],
        tasks: ["recess"]
      }
    },
    jshint: {
      files: ["assets/js/main.js", "assets/js/modules/**/*.js", "test/**/*.js"],
    },
    recess: {
      default: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          "public/main.min.css" : ["assets/less/**/*.less"]
        }
      }
    },
    shell: {
      mocha: {
        command: "mocha --recursive --colors test/lib",
        options: {
          stdout: true,
          stderr: true
        }
      },
      "mocha-phantomjs": {
        command: "mocha-phantomjs -R dot http://localhost:9001/test/assets/js/index.html",
        options: {
          stdout: true,
          stderr: true
        }
      },
      rjs: {
        command: "r.js -o build.json"
      }

    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: "."
        }
      }
    }
  });

  // Tasks
  grunt.registerTask("default", ["connect", "regarde"]);
  grunt.registerTask("test", ["shell:mocha", "connect", "shell:mocha-phantomjs", "jshint"]);

  // Load Dependencies
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-recess");
  grunt.loadNpmTasks("grunt-regarde");
  grunt.loadNpmTasks("grunt-shell");

};
