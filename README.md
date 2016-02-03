# grunt-kss-node
 
[![NPM version](https://badge.fury.io/js/grunt-kss-node.svg)](http://badge.fury.io/js/grunt-kss-node)
[![Dependency Status](https://david-dm.org/lidl-ecommerce/grunt-kss-node.svg)](https://david-dm.org/lidl-ecommerce/grunt-kss-node)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![Npm Downloads](https://nodei.co/npm/grunt-kss.png?downloads=true&stars=true)](https://nodei.co/npm/grunt-kss.png?downloads=true&stars=true)


> KSS style guide generator for grunt.

## Getting Started
This plugin requires Grunt `~0.4.x`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-kss-node --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-kss-node');
```

## The "kss" config and an example task

### Overview
To set up the kss config, add a section named `kss` to the data object passed into `grunt.initConfig()`, in your project's Gruntfile.

```js
grunt.initConfig({
  kss: {
    options: {
      css: '/path/to/style.css',
    },
    dist: {
      src: ['/path/to/sourcedir'],
      dest: '/path/to/destdir'
    }
  }
});
```

Then, once you've added the config information above, you can add the kss build step to an existing task (not shown) or can create your own task. Here is an example task that you can create:

```js
grunt.registerTask('styleguide', [
  // Add other tasks here if needed
  'kss'
  // Add other tasks here if needed
]);
```

Finally, you can call kss by running `grunt styleguide`.

### Options

#### options.template
Type: `String`
Default value: `null`

Use a custom template to build your style guide.

#### options.helpers
Type: `String` or array of `String`
Default value: `null`

Specify location(s) of custom handlebars helpers; see
http://bit.ly/kss-helpers

#### options.mask
Type: `String`
Default value: `null`

Use a custom mask for detecting stylesheets.

#### options.custom
Type: `String` or array of `String`
Default value: `null`

Use custom property name(s) when parsing KSS comments.

#### options.css
Type: `String` or array of `String`
Default value: `null`

Adds CSS stylesheet(s) to your style guide.

#### options.js
Type: `String` or array of `String`
Default value: `null`

Adds JavaScript file(s) to your style guide.

#### options.config
Type: `String`
Default value: `null`

Loads the kss-node configuration from a JSON file.

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
