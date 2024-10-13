document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
      item.addEventListener('click', function() {
          const content = this.querySelector('.content');
          if (content.style.display === 'none') {
              content.style.display = 'block';
          } else {
              content.style.display = 'none';
          }
      });
  });
});
