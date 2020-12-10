const request = require('request')

// CallBack Tutorial
const geocode= (address,callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1Ijoic2hyZXlhc2h0YWxvbGUiLCJhIjoiY2tpOGRmbTFvMDRyZTJ6bzk0bzZieDhzdSJ9.wLSdZGyxdItkNZvk5VKhFg"
    request({ url: url, json:true }, (error, response) =>{
            if(error){
                callback('Unable to connect',undefined)
            }else if(response.body.features.length==0){
                callback('empty array to connect',undefined)
            }
            else{
              callback(undefined,{
                  latitude: response.body.features[0].center[0],
                  longitude: response.body.features[0].center[1],
                  location: response.body.features[0].place_name
              })
            }
        })

}

module.exports = geocode