import React from 'react';
import {notification} from 'antd'
import First from './First';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.openNotificationWithIcon = type => {
      notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    }
  }

  clickHandle(){
    console.log("clicked!!!");
  }

  render(){
    return (<div>
      <First/>
    </div>)
  }
}

export default App;