const toTopLink = document.createElement('a');
toTopLink.setAttribute('href', '#to-top');
toTopLink.style.position = 'fixed';
toTopLink.style.bottom = '20px';
toTopLink.style.right = '20px';
toTopLink.style.display = 'none';

const toTopArrowImage = document.createElement('img');
toTopArrowImage.setAttribute('src', 'img/scroll_to_top.svg');
toTopArrowImage.setAttribute('style', 'width: 50px');

toTopLink.appendChild(toTopArrowImage);
document.body.appendChild(toTopLink);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTopLink.style.display = 'block';
  } else {
    toTopLink.style.display = 'none';
  }
});