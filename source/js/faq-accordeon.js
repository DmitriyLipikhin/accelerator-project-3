document.querySelectorAll('.faq__accordion-item').forEach(item => {
  const button = item.querySelector('.faq__accordion-button');
  const contentParagraph = item.querySelector('p');

  button.addEventListener('click', () => {
    if (!item.classList.contains('faq__accordion-item--open')) {
      contentParagraph.style.maxHeight = 'none';
      const height = contentParagraph.scrollHeight + 'px';

      contentParagraph.style.maxHeight = '0';
      setTimeout(() => {
        contentParagraph.style.maxHeight = height;
        item.classList.add('faq__accordion-item--open');
      }, 1);
    } else {
      contentParagraph.style.maxHeight = '0';
      item.classList.remove('faq__accordion-item--open');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const openItems = document.querySelectorAll('.faq__accordion-item--open');

  openItems.forEach(openItem => {
    const paragraphs = openItem.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
      paragraph.style.maxHeight = 'none';
      const computedHeight = paragraph.scrollHeight + 'px';

      paragraph.style.maxHeight = computedHeight;
    });
  });
});
