let GestorUrls;

if (process.env.NODE_ENV !== 'production') {
  GestorUrls = {
   // drive: 'http://127.0.0.1:5500/API/forestation-api/uploads/',
    drive: 'http://127.0.0.1:5500/forestation-api/uploads/',
    api: 'http://localhost:3000',
    site: 'http://localhost:4001/',
  };
} else {
  GestorUrls = {
    drive: 'https://drive.forestation.app/',
    api: 'https://api.forestation.app',
    site: 'https://forestation.app/',
  };
}

export default GestorUrls;
