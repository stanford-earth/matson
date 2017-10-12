/**
 * @file
 */
module.exports = function(grunt) {

  // This is where we configure each task that we'd like to run.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      // This is where we set up all the tasks we'd like grunt to watch for changes.
      scripts: {
        files: ['js/source/**/*.js'],
        tasks: ['uglify', 'drush:ccall'],
        options: {
          spawn: false,
        },
      },
      images: {
        files: ['img/source/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      },
      vector: {
        files: ['img/source/**/*.svg'],
        tasks: ['svgmin'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          interrupt: true
        }
      },
      twig: {
        files: ['templates/**/*.html.twig'],
        tasks: ['uglify', 'svgmin', 'imagemin', 'sass', 'drush:ccall']
      }
    },
    uglify: {
      // This is for minifying all of our scripts.
      options: {
        sourceMap: true,
        mangle: false
      },
      my_target: {
        files: [{
          expand: true,
          cwd: 'js/source',
          src: '{,*/}*.js',
          dest: 'js/build'
        }]
      }
    },
    imagemin: {
      // This will optimize all of our images for the web.
      dynamic: {
        options: {
            optimizationLevel: 7,
        },
        files: [{
          expand: true,
          cwd: 'img/source/',
          src: ['{,*/}*.{png,jpg,gif}' ],
          dest: 'img/optimized/'
        }]
      }
    },
    svgmin: {
      options: {
        plugins: [{
          removeViewBox: false
        }, {
          removeUselessStrokeAndFill: false
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'img/source/',
          src: ['{,*/}*.svg' ],
          dest: 'img/optimized/'
        }]
      }
    },
    sass: {
      // This will compile all of our sass files
      // Additional configuration options can be found at https://github.com/sindresorhus/grunt-sass
      options: {
        includePaths: [
          "scss",
          "node_modules/bourbon/core",
          "node_modules/bourbon-neat/core",
          "node_modules/font-awesome/scss",
          "node_modules/neat-omega",
          "node_modules/decanter/core",
          "node_modules",
          // Parent theme directory.
          "../",
          "../stanford_basic/scss"
        ],
        sourceMap: true,
        // This controls the compiled css and can be changed to nested, compact or compressed.
        outputStyle: 'nested',
        precision: 10
      },
      dist: {
        files: {
          // COMPONENTS.
          'css/components/components.css':                  'scss/components/components.scss',

          // LAYOUT.
          'css/layout/stanford-complex-page.css':           'scss/layout/stanford-complex-page.scss',
          'css/layout/research-area.css':                   'scss/layout/research-area.scss',
          'css/layout/stanford-department.css':             'scss/layout/stanford-department.scss',
          'css/layout/stanford-view-page.css':             'scss/layout/stanford-view-page.scss',
          'css/layout/home.css':                            'scss/layout/home.scss',
          'css/layout/layout.css':                          'scss/layout/layout.scss',

          // BASE.
          'css/base/base.css':                              'scss/base/base.scss',

          // STATE.
          'css/states/states.css':                          'scss/states/states.scss',

          // THEME.
          'css/theme/stanford-event.css':                   'scss/theme/stanford-event/stanford-event.scss',
          'css/theme/stanford-person.css':                  'scss/theme/stanford-person/stanford-person.scss',
          'css/theme/stanford-spotlight.css':               'scss/theme/stanford-spotlight/stanford-spotlight.scss',
          'css/theme/stanford-news.css':                    'scss/theme/stanford-news.scss',
          'css/theme/theme.css':                            'scss/theme/theme.scss',
          'css/theme/print.css':                            'scss/theme/print.scss'
        }
      }
    },
    drush: {
      ccall: {
        args: ['cache-rebuild', 'all']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/**/*.css',
            'templates/**/*.twig',
            'img/optimized/**/*.{png,jpg,gif,svg}',
            'js/build/**/*.js',
            '*.theme'
          ]
        },
        options: {
          watchTask: true,
          // reloadDelay: 1000,
          // reloadDebounce: 500,
          reloadOnRestart: true,
          logConnections: true,
          injectChanges: false // Depends on enabling the link_css module
        }
      }
    },
    availabletasks: {
      tasks: {
        options: {
          filter: "include",
          tasks: [
            'browserSync', 'imagemin', 'sass', 'svgmin', 'uglify', 'watch', 'devmode'
          ]
        }
      }
    }
  });

  // This is where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-available-tasks');
  grunt.loadNpmTasks('grunt-drush');

  // My tasks.
  grunt.registerTask('devmode', "Watch and BrowserSync all in one.", ['drush', 'browserSync', 'watch']);

  // This is where we tell Grunt what to do when we type "grunt" into the terminal.
  // Note: if you'd like to run and of the tasks individually you can do so by typing 'grunt mytaskname' alternatively
  // you can type 'grunt watch' to automatically track your files for changes.
  grunt.registerTask('default', ['availabletasks']);
};
