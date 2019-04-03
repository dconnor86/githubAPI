function searchGithub() {
let userName = document.getElementById('gitSearchId').value;
let URL = `https://api.github.com/users/${userName}/repos`
    fetch (URL)
    .then(response => response.json())
    .then(responseJson => results(responseJson))
    .catch(error => alert('ERROR!'));
}

function results(data, maxResults){
    for(let i = 0; i < data.length & i < ($('#js-max-results').val()); i++){
    data[i].name;
    data[i].html_url; 
    $('.reposForUser').append(
        `<a href= ${data[i].html_url}>${data[i].name} </a><br>`
    );
    }
}

function renderSubmit() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        $('.reposForUser').empty();
        searchGithub()
        })
}

renderSubmit();