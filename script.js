function navigatePage(page) {
  switch (page) {
    case 0:
      window.location.href = "index.html";
      break;
    case 1:
      window.location.href = "intro.html";
      break;
    case 2:
      window.location.href = "methods.html";
      break;
    case 3: window.location.href = "results.html";
      break;
    case 4: window.location.href = "discussion.html";
      break;
    default:
      window.location.href = "worksCited.html";
      break;

  }
}