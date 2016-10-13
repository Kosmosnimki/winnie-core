var concat = require('gulp-concat')
var iife = require('gulp-iife')
var gulp = require('gulp')

var jsSrc = [
    'lib/PagingView.js',
    'lib/FullscreenControlMixin.js',
    'lib/FullscreenPagingPaneControl.js',
    'lib/MobileButtonsPaneControl.js',
    'lib/gmxTreeParser.js',
    'runtime/_header.js',
    'runtime/core.js',
    'runtime/map.js',
    'runtime/layers.js',
    'runtime/controls.js',
    'runtime/containers.js',
    'runtime/widgets.js',
    'runtime/tail.js',
    'runtime/_footer.js'
]

var cssSrc = ['gmxApplication.css']

gulp.task('css', function() {
    return gulp.src(cssSrc)
        .pipe(gulp.dest('dist'))
})

gulp.task('js', function() {
    return gulp.src(jsSrc)
        .pipe(concat('gmxApplication.js'))
        .pipe(iife())
        .pipe(gulp.dest('dist'))
})

gulp.task('default', ['js', 'css'])

gulp.task('watch', ['default'], function () {
    gulp.watch([].concat(jsSrc, cssSrc), ['default'])
})
