var app = angular.module('cmsblog', []);

app.controller('BlogController', ['$scope', '$http', function($scope, $http) {
    $scope.posts = [];
    $http.get('./info.json').success(function(data) {
        $scope.posts = data;
        for (var i = 0; i < $scope.posts.length; i++) {
            $scope.posts[i].text = $scope.posts[i].text.join('\n');
        }
    });
}]);
