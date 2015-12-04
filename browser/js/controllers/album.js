app.controller('AlbumCtrl', function ($scope, $rootScope, $stateParams, PlayerFactory, AlbumFactory) {
	
	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id ==  song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};

	AlbumFactory.fetchById($stateParams.albumId)
	.then(function (album) {
		console.log("the selected album ", album);
		$scope.album = album;
	});
});