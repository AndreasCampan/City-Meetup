import React, { Component} from 'react';
import './App.css';


class HomeView extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    let background = document.querySelector('.section-city-bg');

    window.addEventListener('scroll', () => {
      background.style.opacity = `${1 - window.pageYOffset * 0.0015}`;
      console.log('home view mount')
      if(window.pageYOffset > 300){
        background.style.opacity = '0.4';
      }
    });
    this.hidebutton();
  }

  componentDidUpdate(){
   this.hidebutton();
  }

  hidebutton() {
    if(this.props.fullNav === true) {
      const signup = document.querySelector(".signup");
      signup.style.display = "none";
    }
  }

  render() {
    return (
      <>
        <section className="section-city-bg">
          <div className="city-bg"></div>
        </section>

        <div className="home-content">
          <h2 className="title-main">Events are waiting for You!</h2>

          <button className="signup" onClick={()=>{this.props.login(); this.props.changeNav(); this.hidebutton();}}>Sign In with Google</button>
          <section className="section-2">
            <div className="pic-1"></div>
            <div className="about-box">
              <h3 className="title-1">About This Site</h3>
              <p className="para-1">This progressive web application (PWA) was built following a test-driven development (TDD) technique and uses serverless technology for backend services. 
              <br/><br/>
              The project is created with React. For more information check out the project repository on <a className="inner-links" href="https://github.com/AndreasCampan/City-Meetup" target="_blank" rel="noreferrer" alt="A link directing the user to the project repository on github">Github</a></p>
            </div>
          </section>

          <section className="section-3">
            <div className="what-can-you-do-box">
              <h3 className="title-1">What can you do?</h3>
              <p className="para-2">
                This progressive web application allows you to login using OAuth to view CareerFoundry's upcoming web development events, which can be filtered based on your search criteria.
              </p>
              <br />
              <p className="para-2">
                The application even works offline, retrieving and displaying stored data from a previous session.
                <br/>
                Check out more on <a className="inner-links" href="https://auth0.com/docs/protocols/protocol-oauth2" target="_blank" rel="noreferrer" alt="A link directing the user to Oauth documentation">OAuth</a>. 
              </p>
            </div>
            <div className="pic-2"></div>
          </section>

          <section className="section-4">
            <div className="privacy-box">
              <h3 className="title-1">Privacy</h3>
              <p className="para-3">
                This progressive web application is used specifically for demonstrative and educational purposes and has no commercial intent or use. No personal data is collected or saved and the calendar accessed is not a personal calendar, but pertaining to CareerFoundry's web development events. 
              </p>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default HomeView;
