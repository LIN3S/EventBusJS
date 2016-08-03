/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016 LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Beñat Espiña <benatespina@gmail.com>
 * @author Mikel Tuesta <mikel@lin3s.com>
 */

'use strict';

import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import plumber from 'gulp-plumber';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

const
  paths = {
    npm: './node_modules',
    src: './src',
    dist: './dist'
  },
  watch = {
    js: './src/**/*.js'
  };

// Plumber error function
function onError(err) {
  console.log(err);
  this.emit('end');
}

gulp.task('js', () => {
  return browserify(paths.src + '/index.js')
    .transform('babelify', {presets: ['es2015'], comments: false})
    .bundle()
    .pipe(source('lin3s-event-bus.js'))
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('js:prod', () => {
  return browserify(paths.src + '/index.js')
    .transform('babelify', {presets: ['es2015'], comments: false})
    .bundle()
    .pipe(source('lin3s-event-bus.min.js'))
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(buffer())
    .pipe(uglify({preserveComments: 'license'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', () => {
  gulp.watch(watch.js, ['js']);
});

gulp.task('default', ['js']);

gulp.task('prod', ['js:prod']);
