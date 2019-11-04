function madLib() {
  var noun1 = document.getElementById('noun1').value;
  var noun2 = document.getElementById('noun2').value;
  var verb1 = document.getElementById('verb1').value;
  var verb2 = document.getElementById('verb2').value;
  var adj1 = document.getElementById('adj1').value;
  var adj2 = document.getElementById('adj2').value;
  var story1 = 'It is a period of civil war. Rebel ' + noun1 + ', striking from a hidden base, have ' + verb2 + ' their first victory against the evil Galactic Empire.';
  var story2 = 'During the battle, Rebel spies managed to steal secret plans to the Empire\'s ' + adj2 + ' weapon, the DEATH STAR, an armored space station with enough power to ' + verb1 + ' an entire planet.';
  var story3 = 'Pursued by the Empire\'s ' + adj1 + ' agents, Princess Leia races home aboard her ' + noun2 + ', custodian of the stolen plans that can save her people and restore freedom to the galaxy...';
  document.getElementById('story1').innerText = story1;
  document.getElementById('story2').innerText = story2;
  document.getElementById('story3').innerText = story3;
  document.getElementById('input').classList.add('hidden');
  document.getElementById('crawl').classList.remove('hidden');
  document.getElementById('crawl').classList.add('crawl');
}
