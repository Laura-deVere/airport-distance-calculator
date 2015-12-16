$(function() { 
    $("#airport1").autocomplete({ 
        source: Airport , minLength: 3, delay: 0, 
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
        source: Airport, minLength: 3, delay: 0,
        focus: function( event, ui ) {
            $('#airport2').val( ui.item.value );
            return false;
        },
        select: function( event, ui ) {
            $( "#airport2" ).val( ui.item.value );
            $( "#airport2-lat" ).val( ui.item.latitude );
            $( "#airport2-lon" ).val( ui.item.longitude );
            return false;
        }
    });
});

function distance(frm) {
    // get values for lat1, lon1, lat2, and lon2
    var lat1 = frm.lat1.value;
    var lon1 = frm.lon1.value;
    var lat2 = frm.lat2.value; 
    var lon2 = frm.lon2.value;
    //convert string to number
    var lat1 = Number(lat1);
    var lon1 = Number(lon1);
    var lat2 = Number(lat2);
    var lon2 = Number(lon2);
    //convert lat/lon to radians
    var radLat1 = Math.PI * lat1/180;
    var radLat2 = Math.PI * lat2/180;
    var radLon1 = Math.PI * lon1/180;
    var radLon2 = Math.PI * lon2/180;
    //Haversine formula
    var theta = lon1 - lon2;
    var radTheta = Math.PI * theta/180;
    console.log(radTheta);
    var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    //distance in nautical miles
    dist = dist * 0.8684;
    nm = dist;
    //round to three decimal places
    nm = Math.round(dist*1000)/1000;
    //return value on form input
    frm.nm.value = nm;
}     



