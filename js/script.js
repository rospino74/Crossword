// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(($) =>
	$(() => {
		fetch(
			'puzzleData.json',
			{
				method: 'GET',
    			mode: 'cors',
    			cache: 'no-cache'
			}
		).then(
			rawResponse => rawResponse.json()
		).then(parsedResponse => {
			$('main.puzzle-wrapper').crossword(
				parsedResponse, 
				() => alert('End!')
			);
		});
		
		// Sets the theme
		if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
			$('html').addClass('dark');
		}
	})
)(jQuery)
