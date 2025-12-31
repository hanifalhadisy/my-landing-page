document.addEventListener("DOMContentLoaded", () => {
  const targetP2 = document.getElementById("typing-p2");
  if (!targetP2) return;

  const fullText = targetP2.textContent.trim();
  targetP2.textContent = "";

  let index = 0;

  setTimeout(() => {
    const typing = setInterval(() => {
      targetP2.textContent += fullText[index];
      index++;

      if (index >= fullText.length) {
        clearInterval(typing);
      }
    }, 8);
  }, 2000);
});


// bagian reveal

  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.2
  });

  reveals.forEach(el => observer.observe(el));
