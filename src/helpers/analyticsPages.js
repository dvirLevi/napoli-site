const analyticsPages = (route) => {
  if (ifAlreadyAnalytics) {

    //אנליטיקס
    gtag('config', 'UA-150230848-1', {
      'page_title': route,
      'page_path': `/${route}`
    });
    

    //גוגל ADS
    gtag('config', 'AW-698669401', {
      'page_title': route,
      'page_path': `/${route}`
    });
    if (route === "store") {
      gtag('event', 'conversion', {
        'send_to': 'AW-698669401/AzPuCIabq7IBENmyk80C',
        'value': 1.0,
        'currency': 'ILS'
      });
    }
    if (route === "befor-pay") {
      gtag_report_conversion()
    }
  }
  ifAlreadyAnalytics = true;
}

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof (url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-698669401/yQmBCJromLIBENmyk80C',
    'value': 2.0,
    'currency': 'ILS',
    'event_callback': callback
  });
  return false;
}

export default analyticsPages