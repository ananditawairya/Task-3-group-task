import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style={
  align:'left'
}


/*fetch('https://api.dankness95.hasura-app.io/register/'+fname+'/'+lname+'/'+uname+'/'+password+'/'+email+'/'+phone, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ data})
}).then((response) => response.json())
  .then((responseJson) => {
    return responseJson.success;
  })
  .catch((error) => {
    console.error(error);
  }); */

class About extends Component {
  render(){
    return(
      <div>
        <div>
      <br/>
        <Card >

          <div className="block">
          <h2 id="fb">About</h2>
          FirstName :<br/><br/>
          LastName : <br/><br/>
          UserName :<br/><br/>
          Email :<br/><br/>
          Phone Number :<br/><br/>
        </div>
        </Card>
      </div>
      </div>
    );
  }
}

export default About;
