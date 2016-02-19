const gulp = require('gulp');
const del = require('del');
const shell = require('gulp-shell');

const paths = {
  code: ['client/**/*.+(js|jsx)', 'server/**/*.js'],
  srv_dst: 'server-dist'
};

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['clean', 'babel']);

gulp.task('clean', () => {
    return del(paths.srv_dst);
});

gulp.task('babel', shell.task([
  'npm run build',
  'webpack --progress --colors'
]));

gulp.task('watch', () => {
  gulp.watch(paths.code, ['build']);
});
