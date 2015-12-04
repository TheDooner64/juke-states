app.config(function ($stateProvider) {
    $stateProvider.state('albumList', {
      controller: 'AlbumsCtrl',
      url: '/albums',
      templateUrl: '/views/allAlbums.html'
    });
});