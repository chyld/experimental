const gulp = require('gulp');
const del = require('del');
const shell = require('gulp-shell');

const paths = {
  client_code: ['client/**/*.+(js|jsx)'],
  client_html: ['client/**/*.html'],
  client_dest: '.pub',
  server_code: ['server/**/*.js'],
  server_dest: '.srv'
};

// ************************************************************************** //
// ************************************************************************** //
// ************************************************************************** //

gulp.task('default', ['client-build', 'server-build', 'watch']);

gulp.task('watch', () => {
  gulp.watch(paths.client_code, ['client-build']);
  gulp.watch(paths.server_code, ['server-build']);
});

// ************************************************************************** //
// ************************************************************************** //
// ************************************************************************** //

gulp.task('client-build', ['client-clean', 'client-babel', 'copy-html']);

gulp.task('client-clean', () => {
  return del(paths.client_dest);
});

gulp.task('client-babel', shell.task([
  'webpack --progress --colors'
]));

gulp.task('copy-html', () => {
  gulp.src(paths.client_html)
    .pipe(gulp.dest(paths.client_dest));
});

// ************************************************************************** //
// ************************************************************************** //
// ************************************************************************** //

gulp.task('server-build', ['server-clean', 'server-babel']);

gulp.task('server-clean', () => {
  return del(paths.server_dest);
});

gulp.task('server-babel', shell.task([
  'npm run build'
]));

// ************************************************************************** //
// ************************************************************************** //
// ************************************************************************** //
