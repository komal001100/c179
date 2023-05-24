let coordinates = {}

$(document).ready(function(){
    get_coordinates();
    
})

function get_coordinates (){
    let searchParams = new URLSearchParams(window.location.search) 
    if (searchParams.has('source')  && searchParams.has('destnation') ){
    let source =  searchParams.get('source')
    let destination =  searchParams.get('destination')

    coordinates.source_lat = source.split(";")[0]
    coordinates.source_lon = source.split(";")[0]

    coordinates.destination_lat = source.split(";")[0]
    coordinates.destination_lon = source.split(";")[0]
}

else{
    alert("coordinates are not selected")

    window.history.back();
    
}

    
} 
