import React from 'react';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  emailChanged(e){
    this.setState({email: e.target.value});
  }

  passwordChanged(e){
    this.setState({password: e.target.value});
  }

  register(){
    $.ajax({
      url: '/users',
      method: 'post',
      data: this.state,
      dataType: 'json',
      success: function(r){
        console.log('***response:', r);
      }
    });
  }

  render() {
    return (
      <div>
        <form>
          <input type="email" value={this.state.email} onChange={this.emailChanged.bind(this)} />
          <input type="password" value={this.state.password} onChange={this.passwordChanged.bind(this)} />
          <button type="submit" onClick={this.register.bind(this)}>Register</button>
        </form>
      </div>
    );
  }
}
