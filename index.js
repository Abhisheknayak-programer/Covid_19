function updatemap() {
    fetch("/data2.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                
                recovered = element.recovered;
                cases = element.confirmed;
                if (cases>10000){
                    color = "rgb(255,0,0)";
                }
                else if(cases < 500){
                    color = `rgb(${cases}, 21, 100)`;
                }
                else if (recovered > 200){
                    color ="rgba(0,0,255,0.4)";
                }
                else {
                    color = "rgb(50,205,50)";
                }


                

                new mapboxgl.Marker({
                    draggable: false,
                    color:color,
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            })
        })
}


updatemap();