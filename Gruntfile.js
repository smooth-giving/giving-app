module.exports = function(grunt) {

    //-------------------------------------------------------------
    // Helpers
    // ------------------------------------------------------------

    grunt.initConfig({
      sass: {
        dist: {
          files: {
            'public/stylesheets/style.css': 'sass/style.scss'
          },
          options:{
            includePaths: require('node-bourbon').includePaths,
            includePaths: require('node-neat').includePaths
          }
        }
      },
      watch: {
        source: {
          files: ['sass/**/*.scss'],
          tasks: ['sass'],
          options: {
            livereload: true
          }
        }
      }
    });// end grunt.initConfig

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass']);
};// end module.exports(grunt)
