// ==UserScript==
// @name            Hype Machine Download MP3 Tracks
// @namespace       l33t.me
// @description     Adds a button to download tracks from Hype Machine
// @version         1.0
// @author          Pedro Sola <p3dro.sola@gmail.com>
// @include         http://hypem.com/*
// @include         https://hypem.com/*
// ==/UserScript==

function embed() {
   var original = window.loadTrack;
    window.loadTrack = function(skip,retry,is_fade) {
      var ret = original(skip,retry,is_fade);
      try {
        var url = window.currentPlayerObj[0].url;
        var link = jQuery("<a class='download'>[&#x25BC;]</a>").attr('href', url);
        jQuery('#player-nowplaying a[href*=\\/track\\/]').after(link);
      } catch(e){}
      return ret;
    };
}

var inject = document.createElement("script");
inject.setAttribute("type", "text/javascript");
inject.appendChild(document.createTextNode("(" + embed + ")()"));
document.body.appendChild(inject);