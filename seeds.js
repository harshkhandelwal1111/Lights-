var mongoose=require("mongoose");
var campground= require("./models/campground");
var comment= require("./models/comment");
var data=[
    {
        Name: "cloud's rest",
        image:"https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b014429df8c370a4efb4_340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        Name: "Desert Hills",
        image:"https://pixabay.com/get/e83db7072ef6053ed1584d05fb1d4e97e07ee3d21cac104496f8c97baeeeb7b9_340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        Name: "Canyon floor",
        image:"https://farm4.staticflickr.com/3246/2984979490_bcd60959de.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        Name: "Seventh heaven",
        image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f8c97baeeeb7b9_340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.scription"
    }
    
    ]

function seedDB(){
    //Remove all the campgrounds
campground.remove({}, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("The campgrounds have been removed");
//     //Add new campgrounds
    
//     data.forEach(function(seed){
//       campground.create(seed,function(err,campground){
//           if(err){
//               console.log(err);
//           }
//           else{
//               console.log("added a campground");
//               // Create a Comment
//               comment.create({
//                   text:"This place is great",
//                   author:"homer"
                  
//               }, function(err,comment){
//                   if(err){
//                       console.log(err);
//                   }
//                   else{
//                     campground.comments.push(comment);
//                     campground.save();
//                     console.log("created a new comment");
//                   }
                  
//               });
              
//           }
//       });
//   });
});
  
}

module.exports=seedDB;



