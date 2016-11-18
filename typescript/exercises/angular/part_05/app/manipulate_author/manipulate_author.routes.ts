function routeProviderConfig($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: './app/manipulate_author/add_author.template.html',
  }).when('/edit/:id', {
    templateUrl: './app/manipulate_author/edit_author.template.html',
  });
}

export default ['$routeProvider', routeProviderConfig];
