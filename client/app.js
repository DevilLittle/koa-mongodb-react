
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children || "Welcome to Index Page"}
      </div>
    )
  }
}

export default App