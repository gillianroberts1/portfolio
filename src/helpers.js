export function sendEmail() {
  const emailAddress = "gillianroberts@me.com";
  const subject = "Let's Connect Submission"
  window.location.href = `mailto:${emailAddress}?subject=${subject}`;
}
