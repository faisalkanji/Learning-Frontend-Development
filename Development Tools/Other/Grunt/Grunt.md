# [Grunt](https://gruntjs.com/)
Easily executed repetitive tasks

## Getting Started
1. Install once per computer
`npm install -g grunt-cli`
1. Install grunt in project
`npm install grunt --save-dev`
1. Create a Gruntgile.js and write tasks within it
1. Run grunt
`grunt`

## Gruntfile.js
1. Specify tasks within
`module.exports = function(grunt) {};`
1. Configure project
`grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    build: {
      src: 'src/<%= pkg.name %>.js',
      dest: 'build/<%= pkg.name %>.min.js'
    }
  }
});`
1. Load task
`grunt.loadNpmTasks('grunt-contrib-uglify');`
1. Register tasks to run on "grunt" command
`grunt.registerTask('default', ['uglify']);`

## Usefull tasks
[Minify JavaScript files with UglifyJS](https://www.npmjs.com/package/grunt-contrib-uglify)
[Concatenate files](https://www.npmjs.com/package/grunt-contrib-concat)
[Minify CSS](https://www.npmjs.com/package/grunt-contrib-cssmin)
[Run predefined tasks whenever watched file patterns are added, changed or deleted](https://www.npmjs.com/package/grunt-contrib-watch)
[Validate files with JSHint](https://www.npmjs.com/package/grunt-contrib-jshint)
[Compile Sass to CSS using node-sass](https://www.npmjs.com/package/grunt-sass)
[Start a connect web server](https://www.npmjs.com/package/grunt-contrib-connect)
[Compress files and folders](https://www.npmjs.com/package/grunt-contrib-compress)
[Minify HTML](https://www.npmjs.com/package/grunt-contrib-htmlmin)
[Minify images using imagemin](https://www.npmjs.com/package/grunt-contrib-imagemin)
[plugin for executing shell commands](https://www.npmjs.com/package/grunt-exec)
[Simple grunt task for running an Express server that works great with LiveReload + Watch/Regarde](https://www.npmjs.com/package/grunt-express-server)
[Run jasmine specs headlessly through PhantomJS](https://www.npmjs.com/package/grunt-contrib-jasmine)