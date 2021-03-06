//Gruntfile.js
module.exports = function(grunt) {

 //globbing patterns
  // Locate all JS files inside sr /js/
  // "src/js/**/*.js"   "wildcard"
  // will find:
  // src/js/lib/share.min.js
  // src/js/main.js
  //will NOT find
  // src/js/index.html
  // src/404.js

  grunt.registerTask("hello", function() {
    console.log("Hello from Grunt");
    grunt.file.write("build/test.txt", "This file is written sync");
  });

  grunt.registerTask("hi", ["hello"]);

  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-nodemon");

  grunt.registerTask("default", ["autoprefixer", "concurrent"]);

  grunt.initConfig({
    concurrent: {
      dev: {
        tasks: ["watch", "nodemon"],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      dev: {
        script: "index.js"
      }
    },
    watch: {
      options: {
            livereload: true
          },
        prefix: {
          files: "source/css/**/*.css",
          tasks: ["autoprefixer"]
    },
    template: {
      files: "**/*.html",
      tasks: ["hello"]
    }
  },
    autoprefixer: {
      dev: {
        expand: true,
        flatten: true,
        src: "source/css/**/*.css", //folder names must match
        dest: "build/css/"
      }
    }
  });

};
