









document.querySelectorAll('.circular-skill').forEach((skill) => {
  const percent = skill.getAttribute('data-percent');
  const progressCircle = skill.querySelector('.progress-ring');
  const circleLength = 2 * Math.PI * 35; // Circumference of circle (r=35)

  // Calculate offset for the progress
  const offset = circleLength - (percent / 100) * circleLength;
  progressCircle.style.strokeDashoffset = offset;

  // Smoothly animate the number
  const span = skill.querySelector('.circle span');
  let current = 0;

  const interval = setInterval(() => {
    if (current < percent) {
      current++;
      span.textContent = `${current}%`;
    } else {
      clearInterval(interval);
    }
  }, 20);
});