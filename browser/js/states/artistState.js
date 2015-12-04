app.config(function ($stateProvider) {
    $stateProvider.state('artistList', {
        controller: 'ArtistsCtrl',
        url: '/artists',
        templateUrl: '/views/allArtists.html'
    });
});