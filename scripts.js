function generatePassword() {
    const url = document.getElementById("urlInput").value;
    const urlParts = url.split('.');
    const rootDomain = `${urlParts[urlParts.length - 2]}.${urlParts[urlParts.length - 1]}`;
    const rootDomainVowelsRemoved = rootDomain.replace(/[aeiou]/gi, '');
    const randomNum = Math.round(Math.random() * 100);
    const animals = [
      'Hond', 'Kat', 'Leeuw', 'Beer', 'Vogel', 'Vis', 'Kikker',
      'Geit', 'Koala', 'Panda', 'Haai', 'Schaap'
    ];
    const adjectives = [
      'Schattige', 'Felle', 'Dappere', 'Wilde', 'Gelukkige', 'Sluwe',
      'Snelle', 'Slimme', 'Zachte', 'Grappige', 'Loyale', 'Stiekem'
    ];
    const animalTypes = [
      'Schepsel', 'Beest', 'Organisme', 'Critter', 'Fauna', 'Wezen'
    ];
    const specialCharacters = ['!', '@', '#', '$', '%', '&', '*'];
  
    const password = `${randomItem(specialCharacters)}${randomItem(adjectives)}${randomItem(animals)}${randomItem(animalTypes)}${randomNum} ${rootDomainVowelsRemoved}`;
    document.getElementById("password").textContent = password;
  }
  
  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
function copyPassword() {
    var passwordElement = document.getElementById('password');
    var password = passwordElement.innerText;

    navigator.clipboard.writeText(password).then(function() {
      alert('Password copied to clipboard!');
    }, function() {
      alert('Copying password failed. Please copy it manually.');
    })
    }