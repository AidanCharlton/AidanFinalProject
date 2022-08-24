const { MongoClient } = require("mongodb");
const spots = require('./spots');

const parseCoordinates = (link) => {

  const clipOne = link.split('/maps/@')
  const clipTwo = clipOne[1].split('/data')
  const clipThree = clipTwo[0].split(',')
  const lnglat = {
  lng: clipThree[0],
  lat: clipThree[1]
  }
  return lnglat
}


const parser = spots.map((x) => {
    const split1 =  (x.link.split('/maps/@'))
    return (typeof split1[1])
})

console.log(parser)