const request = require('request')

const forcast= (latitude,longitude,callback) => {
    const url = "http://api.weatherstack.com/current?access_key=4d756a2724a2eb5ad0f0a1b7c76b8d14&query="+ longitude +","+ latitude+""
    request({ url: url, json:true }, (error, response) =>{
            if(error){
                callback('Unable to connect',undefined)
            }else if(response.body.location.region==""){
                callback('empty array to connect',undefined)
            }
            else{
              callback(undefined,{
                  Location: response.body.location.region
              })
            }
        })

}

module.exports = forcast