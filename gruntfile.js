
module.exports = function (grunt) {

  var assets = {
    application: {
      js: [
        'assets/features/application/config.application.js',
        'assets/features/application/controller.application.js',
        'assets/features/application/module.application.js',
      ],
    },
    global: {
      js: [
        'assets/features/shared/service.items.js',
        'assets/features/shared/angular.overwrite.js'
      ],
    },
    page1: {
      js: [
        'assets/features/page1/controller.page1.js',
        'assets/features/page1/config.page1.js',
        'assets/features/page1/module.page1.js'
      ],
      templates: ['template.page1.html']
    },
    vendor: {
      js: [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-sanitize/angular-sanitize.js',
        'node_modules/bootstrap/dist/js/bootstrap.js'
      ],
      files: [
        { cwd: 'node_modules/bootstrap/dist/fonts', src: '**/*.*', dest: 'public/css/fonts', expand: true }
      ]
    }
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      all: {
        options: {
          sassDir: 'assets/scss',
          cssDir: 'public/css',
          imagesDir: 'public/css',
          outputStyle: 'compressed',
          noLineComments: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', 'builds the assets', function (section) {

    var tasks = [];

    var sections = {};

    if (section != null) {
      if (assets[section] != null) {
        sections[section] = {};
      } else {
        console.log("Section '" + section + '" not found, ending...');
        return;
      }
    } else {
      sections = assets;
    }

    for (assetName in sections) {
      var asset = assets[assetName];

      if (asset['templates'] != null && asset['templates'].length > 0) {
        grunt.config('ngtemplates.' + assetName, {
          cwd: 'assets/features/' + assetName,
          src: asset['templates'],
          dest: 'public/js/' + assetName + '.templates.js',
          options: {
            standalone: true,
            prefix: '',
            module: assetName + '.templates',
            htmlmin: {
              collapseWhitespace: true,
              removeComments: true
            }
          }
        });
        tasks.push('ngtemplates:' + assetName);
      }
      if (asset['js'] != null && asset['js'].length > 0) {
        grunt.config('uglify.' + assetName, {
          options: {
            banner: "(function(window, undefined) {'use strict';\n\n",
            footer: "\n\n})(window);",
            mangle: false,
            beautify: true,
          },
          files: [{
            src: asset['js'],
            dest: "public/js/" + assetName + ".js"
          }]
        });
        tasks.push('uglify:' + assetName);

        grunt.config('uglify.' + assetName + '-min', {
          options: {
            banner: "(function(window, undefined) {'use strict';\n\n",
            footer: "\n\n})(window);",
            mangle: false,
            beautify: true,
          },
          files: [{
            src: asset['js'],
            dest: "public/js/" + assetName + ".min.js"
          }]
        });
        tasks.push('uglify:' + assetName + '-min');
      }
      if (asset['files'] != null && asset['files'].length > 0) {
        grunt.config('copy.' + assetName, {
          files: asset['files']
        });
        tasks.push('copy:' + assetName);
      }
    }

    grunt.task.run(tasks);
  })

  // Default task(s).
  grunt.registerTask('default', ['compass','build']);

};