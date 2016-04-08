//The following stops videos in your modals from playing after closing the window
.directive('pauseOnClose', function() {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			//find elements by video tag
			var modalArray = []slice.call(document.querySelectorAll('hidden.bs.modal'))
			angular.forEach(modalArray, function(obj) {
			//apply pausing to object
			obj.pause()
			})	
		})
	  }
	}
})



//original function from earlier version of website
// $(document).ready(function(){
//   $('.modal').on('hidden.bs.modal', function () {
//  var $this = $(this).find('iframe'),
//       tempSrc = $this.attr('src')
//       $this.attr('src', "")
//       $this.attr('src', tempSrc)
//   })
// })
