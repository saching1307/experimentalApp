/**
 * @author Goyal, Sachin
 */

function MapView() {
	
	var my_location = Titanium.Geolocation.getCurrentPosition(function(e)
{
    if (e.error)
    {
        alert('error ' + JSON.stringify(e.error));
        return;
    }
 
    var current_longitude = e.coords.longitude;
    var current_latitude = e.coords.latitude;
    var current_altitude = e.coords.altitude;
    var current_heading = e.coords.heading;
    var current_accuracy = e.coords.accuracy;
    var current_speed = e.coords.speed;
    var current_timestamp = e.coords.timestamp;
    var current_altitudeAccuracy = e.coords.altitudeAccuracy;
//==================================================//
// CREATE ANNOTATIONS
//
    var thisLocation = Map.createAnnotation({
        animate:true,
        title:"You are here!",
        pincolor:Titanium.Map.ANNOTATION_GREEN,
        latitude:parseFloat(current_latitude),
        //latitude:data[c]['gmap_lat'],
        longitude:parseFloat(current_longitude),
        //longitude:data[c]['gmap_lon'],
        myid:30
    });       
    return thisLocation;
});     
 
 
	var Map = require('ti.map');
var win = Titanium.UI.createWindow();

var mountainView = Map.createAnnotation({
    latitude:37.390749,
    longitude:-122.081651,
    title:"Sachin",
    subtitle:'Mountain View, CA',
     leftView: Ti.UI.createButton({title: 'Detail'}),
    pincolor:Map.ANNOTATION_GREEN,
    draggable: true,
    myid:1 // Custom property to uniquely identify this annotation.
});

var mapview = Map.createView({
    mapType: Map.HYBRID_TYPE,
    region: {latitude:33.74511, longitude:-84.38993,
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    userLocation:true,
    annotations:[mountainView],
    width:"90%",
    height:"60%",
    top:"10%"
});

mapview.addEventListener('pinchangedragstate', function(e){
    Ti.API.info(e.type);
    Ti.API.info(JSON.stringify(e.newState));
}); 

mapview.addEventListener('click', function(e){
    Ti.API.info(e.type);
    Ti.API.info(JSON.stringify(e.clicksource));
});

mapview.addEventListener('regionchanged', function(e){
   Ti.API.info(my_location);
});

mapview.addEventListener('complete', function(e){
    Ti.API.info(e.type);
});

return mapview;
}

function doClick()
{
	alert($.mapview.region);
}
module.exports = MapView;
