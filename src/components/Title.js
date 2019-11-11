import React from 'react';

const TitleStyle={
    display: 'flex',
    justifyContent:'center',
    backgroundColor:'grey',
    color:'white',
    fontWeight:'bold'
}
function Title() {
    return (
      <h1 style={TitleStyle}>ToDo List application</h1>
    );
  }
  
  export default Title;
  