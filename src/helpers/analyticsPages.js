const analyticsPages = (route) => {
  if (ifAlreadyAnalytics) {
    gtag('config', 'UA-150230848-1', {
      'page_title': route,
      'page_path': `/${route}`
    });
    gtag('config', 'AW-698669401', {
      'page_title': route,
      'page_path': `/${route}`
    });


    // gtag('event', 'page_view', {
    //   'send_to': 'AW-698669401',
    //   'value': 'replace with value',
    //   'items': [{
    //     'id': 'replace with value',
    //     'location_id': 'replace with value',
    //     'google_business_vertical': 'local'
    //   }, {
    //     'id': 'replace with value',
    //     'google_business_vertical': 'retail'
    //   }]
    // });

  }
  ifAlreadyAnalytics = true;
}

export default analyticsPages