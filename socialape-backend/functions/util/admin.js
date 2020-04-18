const admin= require('firebase-admin');

const serviceAccount = require("./dbkey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://socialape-74ef9.firebaseio.com",
    storageBucket:"socialape-74ef9.appspot.com"
  });

const db=admin.firestore();
module.exports={admin,db};