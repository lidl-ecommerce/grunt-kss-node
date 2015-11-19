/**
 * grunt-kss
 *
 * https://github.com/lidl-ecommerce/grunt-kss-node

 * @author Foued Dghaies <foued@dghaies.de>
 * @licence  MIT license.
 *
 * @param grunt
 */

module.exports = function gruntKss(grunt) {

    'use strict';

    grunt.registerMultiTask('kss', 'Generate style guide by kss-node.', function kssTask() {

        var node = 'node';
        var kssNpmPath = 'node_modules/kss/bin/kss-node';
        var fs = require('fs');
        var exec = require('child_process').exec;
        var currentTask = grunt.task.current;
        var done = currentTask.async();
        var dest = process.cwd();
        var files = currentTask.files;
        var options = currentTask.options({
            template: null,
            helpers: null,
            mask: null,
            custom: null,
            css: null,
            js: null,
            config: null
        });

        /**
         * build kss command
         *
         * @private
         * @param {string} node path to nodejs bin
         * @param {string} kssNpmPath path to kss bin
         * @param {array} options kss options
         * @param {array} files file list grunt.task.current.files
         * @returns {array}
         */
        var _buildKssCmd = function buildKssCmd(node, kssNpmPath, options, files) {

            var cmd = [
                node,
                kssNpmPath
            ];
            for (var optionName in options) {

                grunt.log.debug('Reading option: ' + optionName);

                if (options.hasOwnProperty(optionName) && typeof options[optionName] === 'string') {
                    grunt.log.debug('                > ' + options[optionName]);
                    cmd.push('--' + optionName, options[optionName]);
                }
            }
            files.forEach(function parseDestinationsFile(file) {

                if (file.src.length === 0) {
                    grunt.log.error('No source files founded');
                    grunt.fail.warn('Wrong configuration', 1);
                }
                fs.exists(file.src[0], function srcExists(exists) {
                    if (!exists) {
                        grunt.log.error('src config file path does not exist!');
                        grunt.fail.warn('Wrong configuration', 1);
                    }
                });
                fs.exists(file.dest, function destExists(exists) {
                    if (!exists) {
                        grunt.file.mkdir(options.dest);
                    }
                });
                cmd.push('"' + file.src[0] + '"');
                cmd.push('"' + file.dest + '"');
                dest = file.dest;
            });
            return cmd;
        };

        /**
         * log execution returns
         *
         * @private
         * @param {string} error
         * @param {string} result
         * @param {integer} code
         *
         */
        var _log = function putInfo(error, result, code) {
            if (error !== null) {
                grunt.log.error(error);
                grunt.log.error('Code: ' + code);
            } else {
                grunt.log.write(result);
            }
            done();
        };

        // Execute
        var kssCmd = _buildKssCmd(node, kssNpmPath, options, files);
        exec(kssCmd.join(' '), _log);
        var logs = kssCmd.slice(2);
        grunt.log.ok('kss-node ' + logs.join(' '));

    });
};