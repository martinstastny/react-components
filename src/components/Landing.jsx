import React from 'react';
import Header from './Header';

class Landing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <main className="main-content">
          <div className="row">
            <div className="container">
              {this.props.children}
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Landing;