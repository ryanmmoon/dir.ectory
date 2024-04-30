if (location.hostname !=
  document.currentScript.getAttribute('domain')){
    location.href = "https://" +
  document.currentScript.getAttribute('domain') + location.pathname;
} else{
  console.log("Your using Handshake");
}