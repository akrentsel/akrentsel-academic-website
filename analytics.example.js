// To enable Google Analytics: copy this file to `analytics.js` and replace
// the placeholder GA_ID with your own GA4 Measurement ID (looks like G-XXXXX).
// `analytics.js` is gitignored so your tracking ID isn't published.
(function () {
  var GA_ID = "YOUR-GA4-ID-HERE";
  if (!GA_ID || GA_ID.indexOf("YOUR-") === 0) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
})();
