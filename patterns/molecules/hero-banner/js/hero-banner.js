var tag = document.createElement('script');
tag.id = 'youtube-iframe-api';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

alert("hey");
