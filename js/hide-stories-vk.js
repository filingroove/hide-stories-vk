/*
	StackOverflow-driven development
	http://stackoverflow.com/a/4585031
*/
(function(history){
	"use strict";

	function act() {
		let storiesBlock = document.querySelector( "#stories_feed_wrap" );

		if ( storiesBlock ) {
			storiesBlock.remove();
		}
	}

	act();

	let pushState = history.pushState;
	
	history.pushState = function(state) {
		if (typeof history.onpushstate == "function") {
			history.onpushstate({state: state});
		}
		// ... whatever else you want to do
		// maybe call onhashchange e.handler
		return pushState.apply( history, arguments );
	}

	history.onpushstate = function( e ) {
		console.log( "[ HIDE STORIES VK ] History state changed" );
		setTimeout( act, 600 );
	}

	console.log( "[ HIDE STORIES VK ] Loaded" );
})( window.history );




