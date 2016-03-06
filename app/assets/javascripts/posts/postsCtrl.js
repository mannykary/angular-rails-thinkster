angular.module('flapperNews')
	.controller('PostsCtrl', [
		'$scope',
		'posts',
		'posts',
		function ($scope, posts, posts) {
			$scope.post = post;

			$scope.addComment = function () {
				if ($scope.body === '') { return; }

				posts.addComment(post.id, {
					body: $scope.body,
					author: 'user',
					upvotes: 0
				}).success(function (comment) {
					$scope.post.comments.push(comment);
				});
				$scope.body = '';
			};

			$scope.incrementUpvotes = function (comment) {
				posts.upvoteComment(post, comment);
			};
		}
	]);