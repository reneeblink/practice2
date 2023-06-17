function acceptCookies() {

    document.getElementById('cookieConsent').style.display = 'none';
  }
  
  if (localStorage.getItem('cookieConsentAccepted')) {
    document.getElementById('cookieConsent').style.display = 'none';
  }
  