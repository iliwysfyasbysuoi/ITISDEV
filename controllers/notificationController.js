
const { ObjectId } = require('mongodb');
const db = require('../model/db.js');
const notifModel = require('../model/notifModel.js');
const requestModel = require('../model/requestModel.js');





const notificationController ={
    getNotification: function(req,res){

        var username = req.session.username;
        var notifDate, requestDate, username, aName, title, response;

        var notifs = [];
        notifModel.find({username: username}, function(err, notifResults){

            console.log("notifResults.length: "+notifResults.length);

            if(notifResults.length != 0){
                var count = 0;
                notifResults.forEach(function( v, err){

                    requestModel.findOne({request_ID: v.request_ID}, function(err, requestResults){
                        console.log("requestResults: " + requestResults)

                        var notif = {
                            notifDate : v.date.toDateString(),
                            type: v.type,
                            username: username,
                            title: requestResults.book_title,
                            aName: requestResults.book_author,
                            requestDate: requestResults.date_requested.toDateString()
                        }
        
                        notifs.push(notif);
        
                        count++;
                        if(count == notifResults.length){
                            console.log("notifs: " + JSON.stringify(notifs, null, '   '));
        
                            res.render("notification", {
                                notifs: notifs
                            });
        
                        }

                    })
                })
            }else{
                res.render("notification", {
                });

            }
        })
    },
    getSendNotification: function(req,res){

        //computes for the difference in days between the date_requested and current_date
        const current_date = new Date();
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        

        requestModel.find({status: "Active"}, function(err, ActiveRequests){
            // console.log("ActiveRequests: " + ActiveRequests);

            ActiveRequestsCount = 0;
            ActiveRequests.forEach(function(ActiveRequest, err){
                
                var username = ActiveRequest.username;
                var date_requested = ActiveRequest.date_requested; 
                var request_ID = ActiveRequest.request_ID;
                var ignored_notif_count = ActiveRequest.ignored_notif_count;
                // this computes for the difference in days of date_requested and the current_date
                var days = Math.round(Math.abs((date_requested - current_date) / oneDay ))  ; 

                // determines if the difference is a span of 2 weeks/14 days
                // if the value is 0, then eligible for sending a notif na, else, not
                var isEligible = days%14;

                // console.log("\n\nActiveRequest: " + ActiveRequest);
                // console.log("days: " + days);
                // console.log("isEligible: " + isEligible);



                // if pang-14th day na && NOT THE SAME DAY AS TODAY
                if(isEligible == 0 && days!= 0){
                    //finds all Update Notifications for that

                    // console.log("days: " + days);
                    // console.log("isEligible: " + isEligible);

                    
                    notifModel.find({request_ID: request_ID, type: "Update"}, function(err, notifsResult){

                        // console.log("notifsResult.length: "+ notifsResult.length);

                        //if may laman na notifs
                        if(notifsResult.length != 0){

                            // console.log("may update na")
                            notifsResultCount = 0;
                            notifsResult.forEach(function(n, err){
                                // if meron nang notif made on current_date
                                if( Math.round(Math.abs((n.date - current_date) / oneDay )) == 0 ){
                                    //do nothing //end na


                                    // console.log("pasok    if( Math.round(Math.abs((n.date - current_date) / oneDay )) == 0 ")

                                    // console.log("notifsResult: "+ notifsResult);

                                    notifsResultCount++;
                                    // if all 'update' notifs are checked na for that request
                                    if(notifsResultCount == notifsResult.length){

                                        ActiveRequestsCount++;
                                        //if all active requests are checked na
                                        if(ActiveRequestsCount == ActiveRequests.length){
                                            //end
                                            res.send("ok na from may notif na on that day");
                                        }

                                    }

                                }
                                // else, wala pang notif for that day(current day)
                                else{

                                    console.log("else part magccreate ng notiof dapat")
                                    //make notif

                                    ignored_notif_count++; //plus 1 everytime na may notif na gagawin
                                    requestModel.updateOne({request_ID: request_ID}, {$Set: {ignored_notif_count: ignored_notif_count}}, function(){
                                        var notification = new notifModel({
                                            notif_ID: ObjectId(),
                                            type : "Update",
                                            username: username,
                                            request_ID: request_ID,
                                            date: new Date()
                                        })
                                        notification.save();

                                        notifsResultCount++;
                                        // if all 'update' notifs are checked na for that request
                                        if(notifsResultCount == notifsResult.length){

                                            ActiveRequestsCount++;
                                            //if all active requests are checked na
                                            if(ActiveRequestsCount == ActiveRequests.length){
                                                //end
                                                res.send("ok na from may notif na but no notifs pa on that day");
                                            }

                                        }
                                    })

                                }
                            })
                        }
                        //if wala pang update notif ever
                        else{
                            // make notif na

                            ignored_notif_count++; //plus 1 everytime na may notif na gagawin
                            console.log("if wala pang update notif ever!!  ignored_notif_count: "+ ignored_notif_count);
                            console.log("request_ID: " + request_ID)
                            requestModel.updateOne({request_ID: request_ID}, {$set: {ignored_notif_count: ignored_notif_count}}, function(){
                                console.log("PASOK SA UPDATE")
                                var notification = new notifModel({
                                    notif_ID: ObjectId(),
                                    type : "Update",
                                    username: username,
                                    request_ID: request_ID,
                                    date: new Date()
                                })

                                notification.save();

                                ActiveRequestsCount++;
                                //if all active requests are checked na
                                if(ActiveRequestsCount == ActiveRequests.length){
                                    //end
                                    res.send("ok na from else na wala pang notif ever");
                                }
                            })
                        }
                    } )

                }
                // else (hindi pang-14th day)
                else{
                    //do nothing
                    

                    ActiveRequestsCount++;
                    //if all active requests are checked na
                    if(ActiveRequestsCount == ActiveRequests.length){
                        //end
                        res.send("ok na, hindi pang-14th day so no notif made");
                    }
                    

                }

                




            })

            // console.log("ActiveRequests: "+ ActiveRequests);
            // res.send(true);

        })
        

    }
}

module.exports = notificationController;
