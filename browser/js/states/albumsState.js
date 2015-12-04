app.config(function ($stateProvider) {
    $stateProvider.state('albumList', {
      controller: 'AlbumsCtrl',
      url: '/albums',
      templateUrl: '/views/allAlbums.html'
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('singleAlbum', {
      controller: 'AlbumCtrl',
      url: '/albums/:albumId',
      templateUrl: '/views/singleAlbum.html'
    });
});
