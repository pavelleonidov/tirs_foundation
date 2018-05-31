
// Copyright 2018 Pavel Leonidov

/*
	Gulp tasks to use for runtime compiling and for minifying assets triggered by the publish script
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifyjs = require('uglify-js');
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var minify = composer(uglifyjs, console);
var concat = require('gulp-concat');
var print = require('gulp-print').default;

gulp.task('minify-js', function (cb) {
	// the same options as described above
	var options = {};

	pump([
			gulp.src('lib/*.js'),
			minify(options),
			gulp.dest('dist')
		],
		cb
	);
});

gulp.task('build-js', function() {
	return gulp.src(
		[   
			'../tirs_foundation/node_modules/jquery/dist/jquery.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.core.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.util.timerAndImageLoader.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.util.touch.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.util.box.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.util.nest.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.dropdown.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.dropdownMenu.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.accordion.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.accordionMenu.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.tabs.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.responsiveAccordionTabs.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.responsiveMenu.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.responsiveToggle.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.sticky.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.magellan.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.toggler.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.drilldown.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.interchange.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.tooltip.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.equalizer.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.abide.js',
			'../tirs_foundation/node_modules/foundation-sites/dist/js/plugins/foundation.reveal.js',
			'Resources/Public/JavaScript/main.js'
		]
	)
		.pipe(concat('app.js').on('error', function(e) {
			console.log(e);
		}))
		.pipe(gulp.dest('./Resources/Public/JavaScript/').on('error', function(e) {
			console.log(e);
		}))
		.pipe(print(function() {
			return "JS compilation succeeded";
		}));

});

gulp.task('minify-js', function() {
	return gulp.src(
		[
			'Resources/Public/JavaScript/app.js'
		]
	)
		.pipe(concat('app.min.js').on('error', function(e) {
			console.log(e);
		}))
		.pipe(minify().on('error', function(e) {
			console.log(e)
		}))
		.pipe(gulp.dest('./Resources/Public/JavaScript/').on('error', function(e) {
			console.log(e);
		}))
        .pipe(print(function() {
            return "JS minification compilation succeeded";
        }));
});

var stylesSrc = 'Resources/Private/SCSS/**/*.scss';
var stylesDest = './Resources/Public/CSS/';
// Compile SCSS to CSS
gulp.task('styles-prod', function() {
	return gulp.src(stylesSrc)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest(stylesDest))
        .pipe(print(function() {
            return "SCSS compilation succeeded";
        }));
});

gulp.task('styles-dev', function() {
	return gulp.src(stylesSrc)
		.pipe(sass({
			sourceComments: true,
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(gulp.dest(stylesDest))
        .pipe(print(function() {
            return "SCSS compilation succeeded";
        }));
});

//Watch task
gulp.task('default',function() {
	gulp.watch('Resources/Private/Scss/**/*.scss', { usePolling: true}, ['styles-dev']);
	gulp.watch('Resources/Public/JavaScript/**/*.js', { usePolling: true}, ['build-js']);
});
