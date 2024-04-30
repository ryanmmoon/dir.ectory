function hnscheck() {
  var x = document.getElementsByClassName("hns");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
  }
  
  var y = document.getElementsByClassName("nohns");
  var g;
  for (g = 0; g < y.length; g++) {
    y[g].style.display = "none";
  }
}

if(window.attachEvent) {
  window.attachEvent('onload', hnscheck);
} else {
  if(window.onload) {
      var curronload = window.onload;
      var newonload = function(evt) {
          curronload(evt);
          hnscheck(evt);
      };
      window.onload = newonload;
  } else {
      window.onload = hnscheck;
  }
}