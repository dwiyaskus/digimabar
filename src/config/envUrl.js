let backendHost;

const hostname = window && window.location && window.location.hostname;

if (
  hostname === 'touress.com' ||
  hostname === 'www.touress.com' ||
  hostname === 'touresswebprodv2.azurewebsites.net'
) {
  backendHost = 'https://api.touress.com/';
} else if (hostname === 'touresswebqav2.azurewebsites.net') {
  backendHost = 'https://touressapiqa.azurewebsites.net/';
} else {
  backendHost = 'https://touressapiqa.azurewebsites.net/';
}

export const API_ROOT = `${backendHost}/Api`;
