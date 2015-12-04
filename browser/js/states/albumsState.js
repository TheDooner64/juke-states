app.config(function ($stateProvider) {
    $stateProvider.state('albumList', {
      url: '/albums',
      controller: 'AlbumsCtrl',
      template: '' +
            '<div>' +
                '<h3>Albums</h3>' +
                '<div class="row">' +
                    '<div ng-repeat="album in albums" class="col-xs-4">' +
                        '<a class="thumbnail" ng-click="viewAlbum(album._id)" href="#">' +
                            '<img ng-src="{{ album.imageUrl }}">' +
                            '<div class="caption">' +
                                '<h5>' +
                                    '<span>{{ album.name }}</span>' +
                                '</h5>' +
                                '<small>{{ album.songs.length }} songs</small>' +
                            '</div>' +
                        '</a>' +
                    '</div>' +
                '</div>' +
            '</div>'
    });
});