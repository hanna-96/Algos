//Web crawler is a program(software) that gets used as by search engine
//Treat this problem as a graph where the root node is a startUrl
//and its edges are nodes(urls root is connected to)
var crawl = function (startUrl, htmlParser) {
    let visited = {};
    visited[startUrl] = true;
    let res = helper(startUrl, htmlParser, [startUrl], visited);
    return res;
  };
  function helper(startUrl, htmlParser, res, visited) {
    if (!startUrl) return res;
    let allEdges = htmlParser.getUrls(startUrl);
    const hostname = getHostname(startUrl);
  
    for (let url of allEdges) {
      if (!visited[url] && url.includes(hostname)) {
        visited[url] = true;
        res.push(url);
        helper(url, htmlParser, res, visited);
      }
    }
    return res;
  }
  const getHostname = (url) => {
    const hostname = new URL(url).hostname; // returns a url object referencing the URL specified,  using an absolute URL string.One of the properties on that object is hostname
    //OR
    // const hostname = url.split('/')[2];
    return hostname;
  };
  