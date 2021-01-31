(() => {
  //stub
  console.log('JS is linked! Hooray!');

  let theIcons = document.querySelectorAll(".icon");

  function logMyId()
  {
    console.log('clicked on an image!');
    console.log("my id:", this.id)
  }

  theIcons.forEach(icon => icon.addEventListener('click', logMyId));
})();
