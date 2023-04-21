let reveal = Array.from(document.querySelectorAll('.reveal'))

const body = document.body

document.addEventListener('scroll', revealActive);

function revealActive() {
    reveal.forEach(revealSize => {
      const viewportHeight = window.innerHeight;
      const revealSizeTop = revealSize.getBoundingClientRect().top;
      const revealSizeBottom = revealSizeTop + revealSize.offsetHeight;
  
      if (revealSizeTop < viewportHeight && revealSizeBottom > 0) {
        revealSize.classList.add('reveal_active');
      } else {
        revealSize.classList.remove('reveal_active');
      }
    });
  }
  

  