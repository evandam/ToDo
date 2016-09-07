var
	gulp = require('gulp'),
	filter = require('gulp-filter'),
	concat = require('gulp-concat'),
	usemin = require('gulp-usemin'),
	browserify = require('browserify'),
	reactify = require('reactify'),
	source = require('vinyl-source-stream'),
	server = require('gulp-express'),
	bower = require('gulp-bower-src'),
	package = require('./package.json');

gulp.task('js', function() {
	return browserify(package.paths.src.app)
	.transform(reactify)
	.bundle()
	.pipe(source(package.paths.dest.bundle))
	.pipe(gulp.dest(package.paths.dest.dir));
});

gulp.task('copy', function() {
	gulp.src([package.paths.src.html])
	.pipe(gulp.dest(package.paths.dest.dir));
});

gulp.task('bower', function() {
	bower()
	.pipe(gulp.dest(package.paths.dest.libs));
});

gulp.task('serve', function() {
	server.run([package.paths.server.app]);
});

gulp.task('watch', function() {
	gulp.watch(package.paths.src.js, ['js']);
	gulp.watch(package.paths.src.html, ['copy']);
	gulp.watch(package.paths.server.files, server.notify);
});

gulp.task('build', ['bower', 'js', 'copy']);
gulp.task('default', ['build', 'serve', 'watch']);
