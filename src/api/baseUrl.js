export default function getBaseUrl() {
  //const inDevelopment = window.location.hostname === 'localhost';
  //const url = inDevelopment ? 'http://localhost:3001/' : '/';

  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

/* eslint-disable no-useless-escape */

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

