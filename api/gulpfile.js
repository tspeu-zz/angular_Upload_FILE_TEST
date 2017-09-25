var gulp   = require( 'gulp' ),
server = require( 'gulp-develop-server' )
jshint = require('gulp-jshint');

gulp.task('lint', function() {
return gulp.src('index.js')
.pipe(jshint())
.pipe(jshint.reporter('default'));
});

// run server 
gulp.task( 'server:start', function() {
server.listen( { path: './index.js' } );
});

// restart server if index.js changed 
gulp.task( 'server:restart', function() {
gulp.watch( [ './index.js' ], server.restart );
});

gulp.task('default', ['lint','server:start','server:restart']);