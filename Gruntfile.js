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
        tasks: ['uglify'],
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
        tasks: ['uglify', 'svgmin', 'imagemin', 'sass']
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
          'css/components/components.css':  'scss/components/components.scss',
          'css/components/component-centered-container/component-centered-container.css':     'scss/components/component-centered-container/component-centered-container.scss',

          // Atoms.
          'patterns/atoms/photo-thumb/css/photo-thumb.component.css':                         'patterns/atoms/photo-thumb/scss/photo-thumb.component.scss',
          'patterns/atoms/icon-item/css/icon-item.component.css':                             'patterns/atoms/icon-item/scss/icon-item.component.scss',
          'patterns/atoms/link-item/css/link-item.component.css':                             'patterns/atoms/link-item/scss/link-item.component.scss',
          'patterns/atoms/nav-item/css/nav-item.component.css':                               'patterns/atoms/nav-item/scss/nav-item.component.scss',
          'patterns/atoms/tag-item/css/tag-item.component.css':                               'patterns/atoms/tag-item/scss/tag-item.component.scss',

          // Molecules.
          'patterns/molecules/calendar-block/css/calendar-block.component.css':               'patterns/molecules/calendar-block/scss/calendar-block.component.scss',
          'patterns/molecules/calendar-blocks/css/calendar-blocks.component.css':             'patterns/molecules/calendar-blocks/scss/calendar-blocks.component.scss',
          'patterns/molecules/callout-block/css/callout-block.component.css':                 'patterns/molecules/callout-block/scss/callout-block.component.scss',
          'patterns/molecules/callout-blocks/css/callout-blocks.component.css':               'patterns/molecules/callout-blocks/scss/callout-blocks.component.scss',
          'patterns/molecules/callout-card/css/callout-card.component.css':                   'patterns/molecules/callout-card/scss/callout-card.component.scss',
          'patterns/molecules/callout-cards/css/callout-cards.component.css':                 'patterns/molecules/callout-cards/scss/callout-cards.component.scss',
          'patterns/molecules/collapsible-menu/css/collapsible-menu.component.css':           'patterns/molecules/collapsible-menu/scss/collapsible-menu.component.scss',
          'patterns/molecules/collapsible-menu/css/collapsible-menu.states.css':              'patterns/molecules/collapsible-menu/scss/collapsible-menu.states.scss',
          'patterns/molecules/expandable-card/css/expandable-card.component.css':             'patterns/molecules/expandable-card/scss/expandable-card.component.scss',
          'patterns/molecules/expandable-card/css/expandable-card.states.css':                'patterns/molecules/expandable-card/scss/expandable-card.states.scss',
          'patterns/molecules/expandable-cards/css/expandable-cards.component.css':           'patterns/molecules/expandable-cards/scss/expandable-cards.component.scss',
          'patterns/molecules/feature-blocks/css/feature-blocks.component.css':               'patterns/molecules/feature-blocks/scss/feature-blocks.component.scss',
          'patterns/molecules/film-card/css/film-card.component.css':                         'patterns/molecules/film-card/scss/film-card.component.scss',
          'patterns/molecules/filmstrip/css/filmstrip.component.css':                         'patterns/molecules/filmstrip/scss/filmstrip.component.scss',
          'patterns/molecules/hero-banner/css/hero-banner.component.css':                     'patterns/molecules/hero-banner/scss/hero-banner.component.scss',
          'patterns/molecules/highlight-card/css/highlight-card.component.css':               'patterns/molecules/highlight-card/scss/highlight-card.component.scss',
          'patterns/molecules/highlight-cards/css/highlight-cards.component.css':             'patterns/molecules/highlight-cards/scss/highlight-cards.component.scss',
          'patterns/molecules/link-banner/css/link-banner.component.css':                     'patterns/molecules/link-banner/scss/link-banner.component.scss',
          'patterns/molecules/masonry-block/css/masonry-block.component.css':                 'patterns/molecules/masonry-block/scss/masonry-block.component.scss',
          'patterns/molecules/masonry-blocks/css/masonry-blocks.component.css':               'patterns/molecules/masonry-blocks/scss/masonry-blocks.component.scss',
          'patterns/molecules/postcard/css/postcard.component.css':                           'patterns/molecules/postcard/scss/postcard.component.scss',
          'patterns/molecules/postcard/css/postcard.theme.css':                               'patterns/molecules/postcard/scss/postcard.theme.scss',
          'patterns/molecules/section-header/css/section-header.component.css':               'patterns/molecules/section-header/scss/section-header.component.scss',
          'patterns/molecules/photo-tile/css/photo-tile.component.css':                       'patterns/molecules/photo-tile/scss/photo-tile.component.scss',
          'patterns/molecules/photo-tiles/css/photo-tiles.component.css':                     'patterns/molecules/photo-tiles/scss/photo-tiles.component.scss',
          'patterns/molecules/simple-block/css/simple-block.component.css':                   'patterns/molecules/simple-block/scss/simple-block.component.scss',
          'patterns/molecules/simple-blocks/css/simple-blocks.component.css':                 'patterns/molecules/simple-blocks/scss/simple-blocks.component.scss',
          'patterns/molecules/simple-slat/css/simple-slat.component.css':                     'patterns/molecules/simple-slat/scss/simple-slat.component.scss',
          'patterns/molecules/simple-slats/css/simple-slats.component.css':                   'patterns/molecules/simple-slats/scss/simple-slats.component.scss',
          'patterns/molecules/photo-banner/css/photo-banner.component.css':                   'patterns/molecules/photo-banner/scss/photo-banner.component.scss',
          'patterns/molecules/quote-card/css/quote-card.component.css':                       'patterns/molecules/quote-card/scss/quote-card.component.scss',
          'patterns/molecules/spotlight-card/css/spotlight-card.component.css':               'patterns/molecules/spotlight-card/scss/spotlight-card.component.scss',
          'patterns/molecules/simple-columns/css/simple-columns.component.css':               'patterns/molecules/simple-columns/scss/simple-columns.component.scss',
          'patterns/molecules/header-card/css/header-card.component.css':                     'patterns/molecules/header-card/scss/header-card.component.scss',
          'patterns/molecules/photo-social/css/photo-social.component.css':                   'patterns/molecules/photo-social/scss/photo-social.component.scss',
          'patterns/molecules/social-card/css/social-card.component.css':                     'patterns/molecules/social-card/scss/social-card.component.scss',

          // Organisms.
          'patterns/organisms/section-calendar-blocks/css/section-calendar-blocks.component.css':       'patterns/organisms/section-calendar-blocks/scss/section-calendar-blocks.component.scss',
          'patterns/organisms/section-callout-blocks/css/section-callout-blocks.component.css':         'patterns/organisms/section-callout-blocks/scss/section-callout-blocks.component.scss',
          'patterns/organisms/section-callout-cards/css/section-callout-cards.component.css':           'patterns/organisms/section-callout-cards/scss/section-callout-cards.component.scss',
          'patterns/organisms/section-callout-filmstrip/css/section-callout-filmstrip.component.css':   'patterns/organisms/section-callout-filmstrip/scss/section-callout-filmstrip.component.scss',
          'patterns/organisms/section-double-filmstrip/css/section-double-filmstrip.component.css':     'patterns/organisms/section-double-filmstrip/scss/section-double-filmstrip.component.scss',
          'patterns/organisms/section-tall-filmstrip/css/section-tall-filmstrip.component.css':         'patterns/organisms/section-tall-filmstrip/scss/section-tall-filmstrip.component.scss',
          'patterns/organisms/section-tall-filmstrip/css/section-tall-filmstrip.state.css':             'patterns/organisms/section-tall-filmstrip/scss/section-tall-filmstrip.state.scss',
          'patterns/organisms/section-expandable-banner/css/section-expandable-banner.component.css':   'patterns/organisms/section-expandable-banner/scss/section-expandable-banner.component.scss',
          'patterns/organisms/section-expandable-banner/css/section-expandable-banner.states.css':      'patterns/organisms/section-expandable-banner/scss/section-expandable-banner.states.scss',
          'patterns/organisms/section-feature-blocks/css/section-feature-blocks.component.css':         'patterns/organisms/section-feature-blocks/scss/section-feature-blocks.component.scss',
          'patterns/organisms/section-highlight-banner/css/section-highlight-banner.component.css':     'patterns/organisms/section-highlight-banner/scss/section-highlight-banner.component.scss',
          'patterns/organisms/section-highlight-cards/css/section-highlight-cards.component.css':     'patterns/organisms/section-highlight-cards/scss/section-highlight-cards.component.scss',
          'patterns/organisms/section-masonry-blocks/css/section-masonry-blocks.component.css':         'patterns/organisms/section-masonry-blocks/scss/section-masonry-blocks.component.scss',
          'patterns/organisms/section-photo-mosaic/css/section-photo-mosaic.component.css':             'patterns/organisms/section-photo-mosaic/scss/section-photo-mosaic.component.scss',
          'patterns/organisms/section-photo-mosaic-quotes/css/section-photo-mosaic-quotes.component.css':      'patterns/organisms/section-photo-mosaic-quotes/scss/section-photo-mosaic-quotes.component.scss',
          'patterns/organisms/section-quote-banner/css/section-quote-banner.component.css':             'patterns/organisms/section-quote-banner/scss/section-quote-banner.component.scss',
          'patterns/organisms/section-spotlight-banner/css/section-spotlight-banner.component.css':     'patterns/organisms/section-spotlight-banner/scss/section-spotlight-banner.component.scss',
          'patterns/organisms/section-header-columns/css/section-header-columns.component.css':         'patterns/organisms/section-header-columns/scss/section-header-columns.component.scss',
          'patterns/organisms/section-header-banner/css/section-header-banner.component.css':           'patterns/organisms/section-header-banner/scss/section-header-banner.component.scss',
          'patterns/organisms/section-social-media/css/section-social-media.component.css':             'patterns/organisms/section-social-media/scss/section-social-media.component.scss',

          // Templates.
          'patterns/templates/simple/css/simple.component.css':                                         'patterns/templates/simple/scss/simple.component.scss',

          // LAYOUT.
          'css/layout/stanford-complex-page.css':           'scss/layout/stanford-complex-page.scss',
          'css/layout/research-area.css':                   'scss/layout/research-area.scss',
          'css/layout/stanford-subsite.css':                'scss/layout/stanford-subsite.scss',
          'css/layout/stanford-view-page.css':              'scss/layout/stanford-view-page.scss',
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
          'css/theme/print.css':                            'scss/theme/print.scss',

          // WYSIWYG.
          'css/wysiwyg/wysiwyg.css':                        'scss/wysiwyg/wysiwyg.scss'
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
  grunt.registerTask('devmode', "Watch and BrowserSync all in one.", ['browserSync', 'watch']);

  // This is where we tell Grunt what to do when we type "grunt" into the terminal.
  // Note: if you'd like to run and of the tasks individually you can do so by typing 'grunt mytaskname' alternatively
  // you can type 'grunt watch' to automatically track your files for changes.
  grunt.registerTask('default', ['availabletasks']);
};
