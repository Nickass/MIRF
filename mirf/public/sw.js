// var CACHE_NAME = 'my-site-cache11-v1';
// var urlsToCache = [
//   '/',
//   // '/styles/main.css',
//   // '/script/main.js'
// ];

// self.addEventListener('install', function(event) {
//   console.log('install');
//   // установка
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//     .then(function(cache) {
//       console.log('Opened cache');
      
//       return cache.addAll(urlsToCache);
//     })
//     .catch(err => console.log(err))
//   );
// });
  
// self.addEventListener('fetch', function(event) {
//     console.log('fetch');

//     event.respondWith(
//       caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         }
        
//         var fetchRequest = event.request.clone();

//         return fetch(fetchRequest).then(
//           function(response) {
//             if(!response || response.status !== 200 || response.type !== 'basic') {
//               return fetch(self.origin);
//             }

//             return response;
//           }
//         ).then(
//           function(response) {
//             var responseToCache = response.clone();

//             caches.open(CACHE_NAME)
//               .then(function(cache) {
//                 cache.put(event.request, responseToCache);
//               });

//             return response;
//           }
//         );
//       }
//     )
//   );
// });