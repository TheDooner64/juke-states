app.controller('AlbumsCtrl', function ($scope, AlbumFactory) {
	AlbumFactory.fetchAll()
	.then(function (albums) {
		$scope.albums = albums;
	});
	// Change this
	// $rootScope.$on('changeView', function (evt, data) {
	// 	$scope.showMe = (data.name == 'allAlbums');
	// });
	// $scope.viewAlbum = function (albumId) {
	// 	$rootScope.$broadcast('changeView', {
	// 		name: 'oneAlbum',
	// 		id: albumId
	// 	});
	// };
});