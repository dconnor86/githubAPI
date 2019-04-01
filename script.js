function searchGithub() {
let userName = document.getElementById('gitSearchId').value;
let URL = 'https://api.github.com/users/'+userName+'/repos'
let maxResults = $('#js-max-results').val();
fetch (URL)
.then(response => response.json())
.then(responseJson => console.log(responseJson))
.catch(error => alert('ERROR!'));
}

function renderSubmit() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        searchGithub();
        
    })
}




renderSubmit();