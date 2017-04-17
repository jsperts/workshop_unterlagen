function location($locationProvider) {
// URL hat ein Hash (#)
  $locationProvider.html5Mode(false);
}

export default ['$locationProvider', location];