(function() {
  "use strict";

  var del = require("del");
  var gulp = require("gulp");
  var gulpList = require("gulp-task-listing");
  var es6 = require("gulp-es6-transpiler");

  gulp.task("help", gulpList);

  gulp.task("default", ["help"]);

  gulp.task("clean", function() {
    return del(["./dist/*"]);
  });

  gulp.task("build", ["clean"], function() {
    return gulp.src("src/*.js")
      .pipe(es6())
      .pipe(gulp.dest("./dist"));
  });
})();
