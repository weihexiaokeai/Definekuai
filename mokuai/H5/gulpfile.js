var gulp=require("gulp")
var webserver=require("gulp-webserver")

gulp.task("server",()=>{
    return gulp.src(".")
     .pipe(webserver({
          open:true,
          livereload:true,
          host:"localhost",
         port:8000,
         fallback:"./src/index.html"
     }))
})