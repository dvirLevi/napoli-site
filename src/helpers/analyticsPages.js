const analyticsPages = (route)=> {
    if(ifAlreadyAnalytics){
        gtag('config', 'UA-150230848-1', {
        'page_title': route,
        'page_path': `/${route}`
      });
      }
      ifAlreadyAnalytics = true;
}

export default analyticsPages