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
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                {this.props.children}
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Landing;