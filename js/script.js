function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('_active');
      }
    });
  }
  
  let options = {
    threshold: [0] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.fullscreen__title ,.fullscreen__title2 ,.fullscreen__title3 ,.fullscreen__title4 , .header_text, .header_text2, .info_text, .anim1, .anim2, .anim3, .anim4');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

