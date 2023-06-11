function generatePassword() {
  const url = document.querySelector(".urlInput").value;
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
  document.querySelector(".password").textContent = password;
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function copyPassword() {
  var passwordElement = document.querySelector('.password');
  var password = passwordElement.innerText;

  navigator.clipboard.writeText(password).then(function() {
    alert('Password copied to clipboard!');
  }, function() {
    alert('Copying password failed. Please copy it manually.');
  })
}

function searchGoogle() {
  var searchInput = document.querySelector('.searchInput');
  var query = searchInput.value.trim();
  if (query !== '') {
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.open(url, '_blank');
  }
}

function searchDuckduckgo() {
  var searchInput = document.querySelector('.searchInput');
  var query = searchInput.value.trim();
  if (query !== '') {
    var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(query);
    window.open(url, '_blank');
  }
}

function searchWikipedia() {
  var searchInput = document.querySelector('.searchInput');
  var query = searchInput.value.trim();
  if (query !== '') {
    var url = 'https://en.wikipedia.org/wiki/Special:Search?search=' + encodeURIComponent(query);
    window.open(url, '_blank');
  }
}

function searchArchwiki() {
  var searchInput = document.querySelector('.searchInput');
  var query = searchInput.value.trim();
  if (query !== '') {
    var url = 'https://wiki.archlinux.org/index.php?search=' + encodeURIComponent(query);
    window.open(url, '_blank');
  }
}
