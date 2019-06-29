document.getElementById('user').addEventListener('keyup', function () {
	var resultsElement = document.getElementById('autoCompleteResults');
	if (this.value !== '') {
		var userNames = [
			'Victoria Chambers', 
			'Dale Byrd',
			'Dawn Wood',
			'Dan Oliver' 
		]
		var results = [];
		for(var i = 0; i < userNames.length; i++) {
			if (userNames[i].toLowerCase().includes(this.value.toLowerCase())) {
				results.push(userNames[i])
			}
		}
		
		resultsElement.innerHTML = '';
		for(var i = 0; i < results.length; i++) {
			var result = document.createElement('li');
			result.innerHTML = results[i];
			resultsElement.appendChild(result);
		}
		resultsElement.style.display = 'block'
	} else {
		resultsElement.style.display = 'none';
	}
		
})

document.getElementById('user').addEventListener('blur', function () {
	var resultsElement = document.getElementById('autoCompleteResults');
	resultsElement.style.display = 'none';

})
