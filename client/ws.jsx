import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  survivors() {
    var host = location.origin.replace(/^http/, 'ws')
    var ws = new WebSocket(host);

    ws.onopen = function(){
      console.log('connection open');
      ws.send('information');
    };

    ws.onmessage = function(e){
      console.log('******:', e.data);
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.survivors.bind(this)}>Get Survivors</button>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
