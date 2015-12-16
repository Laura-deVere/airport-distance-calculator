$(function() { 
    $("#airport1").autocomplete({ 
        source: Airport , minLength: 0, delay: 0, 
        focus: function( event, ui ) {
            $( "#airport1" ).val( ui.item.value );
            return false;
        },
        select: function( event, ui ) {
            $("#airport1").val( ui.item.value );
            $( "#airport1-lat" ).val( ui.item.latitude );
            $( "#airport1-lon").val( ui.item.longitude );
            return false;
        }
    }); 
    $("#airport2").autocomplete({
        source: Airport, minLength: 0, delay: 0,
        focus: function( event, ui ) {
            $('#airport2').val( ui.item.value );
            return false;
        },
        select: function( event, ui ) {
            $( "#airport2" ).val( ui.item.value );
            $( "#airport2-lat" ).val( ui.item.latitude );
            $( "#airport2-lon" ).val( ui.item.longitude );
        }
    });
});

function distance(frm) {
    // get values for lat1, lon1, lat2, and lon2

    var lat1 = frm.lat1.value;
    var lon1 = frm.lon1.value;
    var lat2 = frm.lat2.value; 
    var lon2 = frm.lon2.value;

    var lat1 = Number(lat1);
    var lon1 = Number(lon1);
    var lat2 = Number(lat2);
    var lon2 = Number(lon2);

    var radLat1 = Math.PI * lat1/180;
    var radLat2 = Math.PI * lat2/180;
    var radLon1 = Math.PI * lon1/180;
    var radLon2 = Math.PI * lon2/180;
    
    var theta = lon1 - lon2;
    var radTheta = Math.PI * theta/180;
    console.log(radTheta);
    var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;

    dist = dist * 0.8684;

    mi = dist;
    mi = Math.round(dist*1000)/1000;
    frm.mi.value = mi;
}     

// function distance(frm) {
//     var t1, n1, t2, n2, lat1, lon1, lat2, lon2, dlat, dlon, a, c, dm, mi;
        
//     // get values for lat1, lon1, lat2, and lon2
//     t1 = frm.lat1.value;
//     n1 = frm.lon1.value;
//     t2 = frm.lat2.value; 
//     n2 = frm.lon2.value;
        
//     // convert coordinates to radians
//     lat1 = deg2rad(t1);
//     lon1 = deg2rad(n1);
//     lat2 = deg2rad(t2);
//     lon2 = deg2rad(n2);
        
//     // find the differences between the coordinates
//     dlat = lat2 - lat1;
//     dlon = lon2 - lon1;
        
//     // here's the heavy lifting
//     a  = Math.pow(Math.sin(dlat/2),2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon/2),2);
//     c  = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a)); // great circle distance in radians
//     dm = c * Rm; // great circle distance in miles
        
//     // round the results down to the nearest 1/1000
//     mi = round(dm);
        
//     // display the result
//     frm.mi.value = mi;
// }
//     // convert degrees to radians
//     function deg2rad(deg) {
//         rad = deg * Math.PI/180; // radians = degrees * pi/180
//         return rad;
//     }
    
    
//     // round to the nearest 1/1000
//     function round(x) {
//         return Math.round( x * 1000) / 1000;
//     }


