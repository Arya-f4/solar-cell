const apikey = process.env.WEB_API;
const authDomain = process.env.AUTH_DOMAIN;
const databaseURL = process.env.DATABASE_URL;
const projectId = process.env.PROJECT_ID;
const appId = process.env.APP_ID;
const mesaggingSenderId = process.env.MESSAGING_SENDER_ID;
const storageBucket = process.env.STORAGE_BUCKET;
const measurementId = process.env.MEASUREMENT_ID;

export {
  apikey,
  authDomain,
  databaseURL,
  projectId,
  appId,
  mesaggingSenderId,
  storageBucket,
  measurementId
}