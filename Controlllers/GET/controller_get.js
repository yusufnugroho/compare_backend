'use strict'
const model_get = require('../../Models/GET/model_get')
const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const async = require('async')
const Request = require('request')
const md5 = require('md5')



exports.handleGetProducts = (request, reply) => {
    model_get.handleQueryProducts(request, (error, result) => {
        if(error === true) {
            console.log('error nich')
        } 
        let tempResult = JSON.parse(JSON.stringify(result))
        for(let indexTemporary = 0; indexTemporary<tempResult.length; indexTemporary++){
            let colorSplit = (tempResult[indexTemporary].colors).split(',')
            tempResult[indexTemporary].colors = colorSplit
        }
       reply({
            "error_json": error,
            "products": tempResult 
        })
    })
}
// function convertJSONtoGoogleMapsJSON(data, callback){
//     //https://earthquake.usgs.gov/fdsnws/event/1/
//     data = JSON.parse(data)
//     const totalEarthQuake = parseInt(JSON.stringify(data.metadata.count))
//     // console.log("Total Data : ", totalEarthQuake)
//     let indexEachItem = 0
//     let finalJSON = []
//     let temporaryCurrentObject = {
//         ID: 0,
//         title: "",
//         location: "",
//         img: "infoWindowImg1",
//         lat:  0,
//         lng: 0,
//         marker: 
//         {
//             borderStyle: 'double',
//             borderColor: 'grey',
//             fontFamily: 'ionicons',
//             iconClass: 'ion-android-pin',
//         },
//     }
//     for(indexEachItem = 0; indexEachItem<totalEarthQuake; indexEachItem++){
//         let currentDataObject = data.features[indexEachItem]
//         // Building Object
//         temporaryCurrentObject.ID = indexEachItem
//         temporaryCurrentObject.title = "Magnitude : "+(currentDataObject.properties.mag)
//         temporaryCurrentObject.location = currentDataObject.properties.place
//         temporaryCurrentObject.lat = currentDataObject.geometry.coordinates[0] 
//         temporaryCurrentObject.lng = currentDataObject.geometry.coordinates[1]
//         finalJSON.push(JSON.parse(JSON.stringify(temporaryCurrentObject)))
//         if(indexEachItem == totalEarthQuake-1){
//             callback(false, finalJSON, totalEarthQuake)
//         }
//     }

// }   

// exports.handleEarthQuakeHistory = (request, reply) => {
//     // alertLevel = ['red', 'orange', 'yellow', 'green']
//     const alertLevel = request.params.alertLevel
//     const startDate = request.params.startDate
//     const endDate = request.params.endDate
//     const maxDepth = request.params.maxDepth
//     const minDepth = request.params.minDepth
//     const maxMagnitude = request.params.maxMagnitude
//     const minMagnitude = request.params.minMagnitude
//     const earthQuakeURL = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson"+
//     "&starttime="+startDate+"&endtime="+endDate+
//     "&maxdepth="+maxDepth+"&mindepth="+minDepth+
//     "&maxmagnitude="+maxMagnitude+"&minmagnitude="+minMagnitude+
//     "&alertlevel="+alertLevel

//     let currentHash = md5(earthQuakeURL);
//     /**
//      * 1) Check If End Date > Today 
//      * 2) If End Date != Today | Check Ke DB dengan hash |
//      * 3) If End Date == Today | Query Ke WEBSERVICE EARTHQUAKE
//      */

//      /**
//       * 1) Check If hash already in DB
//       *     1.1) If already in DB, Query History.
//       *     1.2) else, Query to webservice and insert to DB
//       */
//     async.waterfall([
//         (callback) =>{
//             model_get.handleQueryHashData(currentHash, (error, result)=>{
//                 if(error){
//                     console.log("error when check hash")
//                     callback(null, "")   
//                 } else {
//                     console.log(result)
//                     const boolHash = JSON.stringify(result[0].bool_hash)
//                     console.log(boolHash)
//                     callback(null, boolHash)   
//                 }
//             })
//         }, (boolHash, callback)=>{
//             // console.log("boolHash Value :", boolHash)
//             //if(boolHash === "0"){
//                 let x = Request(earthQuakeURL, (error, response, body)=>{
//                     const statusCode = response.statusCode
//                     if(statusCode === 200){
//                         console.log("Berhasil Fetch")
//                         convertJSONtoGoogleMapsJSON(body, (err, result, totalEarthQuake) =>{
//                             console.log("Current Result :: ",result)
//                             callback(null, result, totalEarthQuake)
//                         })
//                     } else{
//                         console.log("Gagal Fetch")
//                         callback(null, "")
//                     }
//                 })
//         },(resultData, totalEarthQuake, callback)=>{
//                 reply({
//                     "error_json": false,
//                     "result_json": earthQuakeURL,
//                     "hash": currentHash,
//                     "result_data": resultData,
//                     "total_earth_quake":totalEarthQuake
//                 })
//         }
//     ])
// }