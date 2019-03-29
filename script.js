let URL = 'https://api.github.com/users/dconnor86/repos'

fetch ('https://api.github.com/users/dconnor86/repos')
.then(response => response.json())
.then(responseJson => console.log(responseJson))
.catch(error => alert('ERROR!'));
    
    
    