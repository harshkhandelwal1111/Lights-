var express=require("express");
var app=express();
var commentRoutes=require("./routes/comments");

var bodyParser=require("body-parser");
var mongoose = require("mongoose");
var campground=require("./models/campground");
app.locals.moment=require("moment");
var passport=require("passport");

var localStrategy=require("passport-local");
var seedDB =require("./seeds");

var user=require("./models/user");

var methodOverride=require("method-override");


//requiring routes
var commentRoutes=require("./routes/comments");
var campgroundRoutes=require("./routes/campgrounds");
var indexRoutes=require("./routes/index");

var flash= require("connect-flash");

app.use(require("express-session")({
    secret:"Once again he is the cutest dog",
    resave:false,
    saveUninitialized:false  
}));

app.use(flash());

app.use(function(req,res,next){
    res.locals.currentUser=req.user;
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    next();
});


var comment=require("./models/comment");
app.use(express.static(__dirname +"/public"));
app.use(methodOverride("_method"));


var reviewRoutes=require("./routes/reviews");
// seedDB();
mongoose.connect("mongodb://harsh:password1@ds227853.mlab.com:27853/outdoor",{ useNewUrlParser: true });
//mongodb://harsh1111:HarshHulk1%@ds227853.mlab.com:27853/outdoor

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

//PASSPORT CONFN




app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());


app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);
app.use(reviewRoutes);

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("theTour seaver have started");
// });
app.listen(3001, () => {
    console.log("The PIXXZZOO server has started!! at 3000");

})
//INDEX route-show all campgrounds
