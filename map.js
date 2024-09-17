const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoicGF2YW42MTkwIiwiYSI6ImNsdjZmOWh2NDBjb2sybG54cHN5dzY5eWcifQ.5j0l_zhAzxUpGbUsj7n0cQ"
 

var map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
})

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy : true})

function setupMap(centerPosition){
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center : centerPosition,
      zoom : 15
    })

    const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls)

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN
  })
  map.addControl(directionControls, "top-left")
}

function successLocation(position){
setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation()
{
setupMap()
}