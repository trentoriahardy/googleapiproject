function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat:33.7490 , lng:-84.3880},
        zoom: 12,
    
    })
}

let marker = new google.maps.Marker({position: locality, map: map, title: "googleApi"})
