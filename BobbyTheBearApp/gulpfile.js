const gulp = require("gulp");
const sass = require("gulp-sass");
const paths = {
    webroot: "src/"
};

// Convert scss to scss
function style() {
    // 1. Find scss file
    // 2. Pass the scss file to the compiler
    // 3. Save the compiled file

    return gulp.src(paths.webroot + '/scss/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest(paths.webroot + '/css'));
}

// Watch for changes
function watch() {
    gulp.watch(paths.webroot + 'scss/*.scss', style);
}

exports.style = style;
exports.watch = watch;
exports.default = function() {
    style();
    watch();
};