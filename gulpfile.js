var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	jade = require('gulp-jade');

gulp.task('sass', function() {
	return sass('assets/')
	.on('error', function (err) {
		console.log(err.message);
	})
	.pipe(gulp.dest('public/css'));
});



gulp.task('watch', function () {
	gulp.watch('scss/*.scss', ['sass']);
});


gulp.task ('default', ['watch']);
