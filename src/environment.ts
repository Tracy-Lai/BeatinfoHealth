// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // TODO: 更新
  firebase: {
    apiKey: "AIzaSyA-Yk0y7XU23xnjhIk1T6cQU0avYPQv9V4",
    authDomain: "beatinfo-health.firebaseapp.com",
    projectId: "beatinfo-health",
    storageBucket: "beatinfo-health.appspot.com",
    messagingSenderId: "1025746078915",
    appId: "1:1025746078915:web:d754707987399a7144e676",
    measurementId: "G-6VQZP221RX"
  },
  // mapKey: 'AIzaSyBcu2buVHX0XDjZuDOaQIi1KdOG_jPDANI',
  apiUri: 'https://health.beatinfo.biz',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
