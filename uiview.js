var app = angular.module("myApp", ["ui.router", "angularSoundManager"]);
function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/discover");
  $stateProvider
    .state("yourPlaylist", {
      url: "/yourPlaylist",
      templateUrl: "./yourplaylist.html",
      controller: "playListCtrl as yourPlaylist",
      data: { pageTitle: "yourPlaylist" },
    })
    .state("discover", {
      url: "/discover",
      templateUrl: "./discover.html",
      controller: "disCtrl as discover",
      data: { pageTitle: "discover" },
    })
    .state("category", {
      url: "/category",
      templateUrl: "./category.html",
      controller: "catCtrl as category",
      data: { pageTitle: "category" },
    })
    .state("artist", {
      url: "/artist/:id",
      templateUrl: "./artist.html",
      controller: "artistCtrl as artist",
      data: { pageTitle: "artist" },
    });
}
app.config(config);

// Get song data from json file
app.run(function ($rootScope, $http) {
  $http.get("songInfo.json").then(function (rsp) {
    $rootScope.songs = rsp.data.songs;
  });
});

app.controller("mainCtrl", function () {});

app.controller("playListCtrl", function () {});

app.controller("disCtrl", function () {});

app.controller("catCtrl", function () {});

app.controller("artistCtrl", function ($scope, $stateParams) {
  var id = $stateParams.id;
  console.log(id);
  var data = $scope.songs;

  data.forEach(function (item, index) {
    if (item.id == id) {
      $scope.selectedSong = item;
      // stop the loop
      return false;
    }
  });
});
// Make sidebar tab active onclick.
app.controller("activeCtrl", [
  "$scope",
  "$location",
  function ($scope, $location) {
    $scope.isActive = function (destination) {
      return destination === $location.path();
    };
  },
]);
