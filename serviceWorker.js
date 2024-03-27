self.addEventListener('install', evt=>{
    console.log("Service worker is registered");
});
self.addEventListener('activate', evt=>{
    console.log("Service worker is activated");
});
self.addEventListener('fetch', evt=>{
    console.log("Service worker is Fetching");
});