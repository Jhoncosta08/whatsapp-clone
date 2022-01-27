import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

export class Firebase {

    constructor() {
        this._config = {
            apiKey: "AIzaSyArLtO3jGnp9RRj0o1V5zPirceTpztcWo8",
            authDomain: "whatsapp-clone-94da3.firebaseapp.com",
            projectId: "whatsapp-clone-94da3",
            storageBucket: "whatsapp-clone-94da3.appspot.com",
            messagingSenderId: "300016187853",
            appId: "1:300016187853:web:a2602fb6e78fae9d30ac84"
        };
        this.init();
    }

    init(){
        if(!this._initialized) {
            firebase.initializeApp(this._config);
            this._initialized = true;
        }
    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

    initAuth() {
        return new Promise((s, f) => {
            let provider = new firebase.auth.GoogleAuthProvider();
           firebase.auth().signInWithPopup(provider).then(result => {
               let token = result.credential.accessToken;
               let user = result.user;
               s({user, token});
           }).catch(err => {
               f(err);
           });
        });
    }

}
