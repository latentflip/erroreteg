(function() {
  function getBox(width, height) {
    return {
      string: "+",
      style: "font-size: 1px; padding: " + Math.floor(height/2) + "px " + Math.floor(width/2) + "px; line-height: " + height + "px;"
    }
  }

  window.onerror = function(e) { 
    if (e.toString().match('undefined is not a function')) {
      var width=250, height=141;
      var dim = getBox(250, 141);

      console.log("%c" + dim.string, dim.style + "background: url(http://gifs.latentflip.com/undefined-small.gif); background-size: " + (width) + "px " + (height) + "px; color: transparent;");
    } else {
     throw e;
    }
  }
})();
