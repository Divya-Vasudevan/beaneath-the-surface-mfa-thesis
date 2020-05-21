/*globals firebase*/

//Firebase Setup----------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyC8fxSR8OnisLcKvBK1iQkzWfzKNnF8bpQ",
  authDomain: "ccs-thesis-a0cae.firebaseapp.com",
  databaseURL: "https://ccs-thesis-a0cae.firebaseio.com",
  projectId: "ccs-thesis-a0cae",
  storageBucket: "ccs-thesis-a0cae.appspot.com",
  messagingSenderId: "558783924396",
  appId: "1:558783924396:web:069e13b99a97696c467709"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//------------------------------------------------------------------------
const docRef = db.doc("users/first");
//------------------------------------------------------------------------

const plant = [
  "https://cdn.glitch.com/3ee2e06f-ab1d-4e38-9cb9-bfe5d037cc08%2Fplant1.png?v=1587043061087",
  "https://cdn.glitch.com/3ee2e06f-ab1d-4e38-9cb9-bfe5d037cc08%2Fplant2.png?v=1587043061533",
  "https://cdn.glitch.com/3ee2e06f-ab1d-4e38-9cb9-bfe5d037cc08%2Fplant3.png?v=1587043061287",
  "https://cdn.glitch.com/3ee2e06f-ab1d-4e38-9cb9-bfe5d037cc08%2Fplant4.png?v=1587043061341"
];

let image = document.querySelector("#image");

docRef.onSnapshot(function(doc) {
  animatePlant(doc);
});

function init() {
  docRef.get().then(function(doc) {
    animatePlant(doc);
  });
}

function animatePlant(doc) {
  if (doc && doc.exists && image!=null) {
      const data = doc.data();
      if (data.points == true) {
        docRef.set({
          points: false,
          currentIndex: data.currentIndex + 1
        });
        //animatePlant();
      }
      image.src = plant[data.currentIndex % 4];
    }
}

function QR_setResult() {
  docRef.get().then(function(doc) {
    if (doc && doc.exists) {
      const data = doc.data();
      docRef.set({
        points: true,
        currentIndex: data.currentIndex
      });
      window.location = 'index.html';
    }
    else {
      console.log("no such document in database");
    }
  });
}
