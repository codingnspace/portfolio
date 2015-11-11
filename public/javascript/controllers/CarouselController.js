(function() {
	'use strict';
	angular.module('app')
	.controller('CarouselController', CarouselController);


	function CarouselController() {
		var vm = this;
    vm.myInterval = 5000;
    vm.noWrapSlides = false;
    vm.slides = [
      {
        title:"Pearl McPhee",
        image:"https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-ash2/v/t1.0-9/941444_10200371174816156_1181636882_n.jpg?oh=9a2b3e77985e10824ebeed8e7138bfc4&oe=56B6C760",
        text:'this is some text just to see if this is working',
      },
			{
				title:"Full Stack Developer",
				image:"https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-ash2/v/t1.0-9/941444_10200371174816156_1181636882_n.jpg?oh=9a2b3e77985e10824ebeed8e7138bfc4&oe=56B6C760",
				text:'this is some text just to see if this is working',
			},
    ];
	}
})();
