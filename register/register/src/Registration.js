import React,{Component} from 'react';
var firebase=require('firebase');
var config = {
    apiKey: "AIzaSyBvieaLYKpAIQ-RUulhwlpCdPUfgroWR8A",
    authDomain: "survey-8d8a3.firebaseapp.com",
    databaseURL: "https://survey-8d8a3.firebaseio.com",
    projectId: "survey-8d8a3",
    storageBucket: "survey-8d8a3.appspot.com",
    messagingSenderId: "137526420490"
  };
  firebase.initializeApp(config);

  class Registration extends Component {

    signup(){
      const email=this.refs.email.value;  //retrieving value of email
      const password=this.refs.password.value; //retrieving vale of password using refs
      console.log(email,password);

      const auth=firebase.auth()
      const promise=auth.createUserWithEmailAndPassword(email,password);
      promise
      .then(user=>{
        var err="Welcome"+user.email
        firebase.database().ref('User/'+user.uid).set({
          email:user.email
      });
      console.log(user);
      this.setState({err:err});

    });
    promise.catch(e=>{
      var err=e.message;
      console.log(err);
      this.setState({err:err});
    });

    }

    google(){
      console.log('I am from google');
      var provider = new firebase.auth.GoogleAuthProvider();
      var promise=firebase.auth().signInWithPopup(provider);

      promise.then(result=>{
        var user=result.user;
        console.log(result);

        firebase.database().ref('users/'+user.uid).set({
          email:user.email,
          name:user.displayName
        });

      });
      promise.catch(e=>{
        var msg=e.message;
        console.log(msg);

      });
    }





    constructor(props){
      super(props);

      this.state = {err:''};

      this.signup=this.signup.bind(this);

        this.google=this.google.bind(this);
    }
    render(){
      return(
        <div className="content">
          <form method="post" action="">
        <h1 className="head"><em>Sign Up</em></h1>
        <input id="fname" ref="fname" name="fname" type="text" placeholder="First Name"/> <br/>
        <input id="lname" ref="lname" name="lname" type="text" placeholder="Last Name"/> <br/>
        <input id="uname" ref="uname" name="uname" type="text" placeholder="User Name"/> <br/>
        <input id="password" ref="password" name="password" type="password" placeholder="Password" /><br/>
        <input id="email" ref="email" type="email" name="email" placeholder="Email"/> <br/>
        <input id="phone" ref="phone" type="text" name="phone" placeholder="Phone no" /><br/>
        <p>{this.state.err}</p>

        <input type="submit" className="button" onSubmit={this.signup} value="Sign Up" />
        &nbsp;&nbsp;&nbsp;
        </form>
        <br/>
        <button className="button" id="google" onClick={this.google} >Signup with Google</button>

      </div>
      );
    }
  }

  export default Registration
