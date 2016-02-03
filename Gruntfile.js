/**
 * grunt task
 *
 * https://github.com/lidl-ecommerce/grunt-kss-node
 *
 * @author Foued Dghaies <foued@dghaies.de>
 * @licence  MIT license.
 *
 * @param grunt
 */

module.exports = function mainGruntTask(grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        clean: {
            tests: ['test/tmp_*']
        },

        // Configuration to be run (and then tested).
        kss: {
            options: {
                homepage: 'homepage.md',
                verbose: true
            },
            dist: {
                src: ['node_modules/kss/demo'],
                dest: 'test/tmp_dist'
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');


    grunt.registerTask('test', ['clean', 'kss', 'nodeunit']);
    grunt.registerTask('default', ['jshint', 'test']);
};
