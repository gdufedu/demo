var gulp = require("gulp");
var revReplace = require('gulp-rev-replace');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
gulp.task('default', function () {
    var jsFilter = filter('**/*.js', { restore: true });
    var cssFilter = filter('**/*.css', { restore: true });
    var indextmlFilter = filter(['**/*', '!**/index.html'], { restore: true });
    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(jsFilter())
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indextmlFilter)
        .pipe(rev())
        .pipe(indextmlFilter.restore)
        .pipe(revReplace())
        .pipe(gulp.dest('dist'));
});
