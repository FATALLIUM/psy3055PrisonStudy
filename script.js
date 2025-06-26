function navigatePage(page) {
  switch (page) {
    case 1:
      window.location.href = "index.html";
      break;
    case 2:
      window.location.href = "methods.html";
      break;
    case 3: window.location.href = "results.html";
      break;
    case 4: window.location.href = "discussion.html";
      break;
    case 5:
      window.location.href = "worksCited.html";
      break;
    default:
      window.location.href = "index.html";
      break;
  }
}

function openArticle() {
  window.open('https://www.noropsikiyatriarsivi.com/submission/MGSDosyalar/2025/Erkenbaski/28778-erkenbaski-en-974.pdf', '_blank');
}

// Add click listeners to table images when page loads
document.addEventListener('DOMContentLoaded', function() {
  const tableImages = document.querySelectorAll('.tableImg');
  tableImages.forEach(img => {
    img.addEventListener('click', function(e) {
      e.stopPropagation();
      if (!this.classList.contains('expanded')) {
        expandImage(this);
      }
    });
  });
});