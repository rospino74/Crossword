// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
	
		$('#puzzle-wrapper').crossword(puzzleData);
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
		
	})
	
})(jQuery)
