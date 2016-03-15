var gulp = require('gulp'),
    bs = require('browser-sync'),
    makeSprite = require('gulp-sprite-generator');
    
gulp.task('watch', function () {
    bs.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['asset/stylesheets/*.css', '*.html']).on('change', bs.reload);
});

gulp.task('build', function () {
    var output = gulp.src('./asset/stylesheets/*.css')
                .pipe(makeSprite({
                    baseUrl: './asset/img',
                    spriteSheetName: 'sprite.png',
                    styleSheetName: 'main.css',                  
                }));
                
    output.css.pipe(gulp.dest('./asset/stylesheets'));
    output.img.pipe(gulp.dest('./asset/img'));
});