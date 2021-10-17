import './App.css';

function App() {
  return (
    <div className="App">
      <img className="logo" src="/images/iphone.jpg" alt="logo"/>
      <div className="container">
        <div className="row mt-5 mb-2 pt-5">
          <div className="col-3">
            <img src="http://placekitten.com/500/500" alt="" className="photo-header"/>
          </div>
          <div className="col-9">
            <h1 className="">
              Hi, I'm Jin 👋🏼
            </h1>
            <p className="mb-4">I am a motivated iOS Developer. I love the challenge of creating applications from scratch as much as I enjoy adding a cool new feature to a current app. I like that every project I work on brings the opportunity to learn something new.</p>
          </div>
        </div>
        <h2 className="text-center pt-5 mb-4">Commercial Projects</h2>
        <div className="row row-cols-1 row-cols-md-1 g-5">
          <div className="col">
            <h4 className="text-center mb-5">Communic8</h4>
            <div className="card">
              <div className="row justify-content-center">
                <img src="/images/Communic8/dashboard.png" className="col-3" alt="alert" />
                <img src="/images/Communic8/mediaLib.png" className="col-3" alt="alert" />
                <img src="/images/Communic8/alerts.png" className="col-3" alt="alert" />
              </div>
              <div className="card-body mt-4">
                <p className="card-text">Communic8 is an employee engagement platform built on Flutter. My role is developing a media library feature using a bunch of RESTful APIs. As a part of the work, I imported and worked on several open-source iOS plugins, and contributed to their codebase.</p>
                <a href="https://apps.apple.com/au/app/communic8/id1438833452" target="_blank" rel="noreferrer">
                  <img src="/images/appstorebadge.png" alt="app store"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h4 className="text-center mb-5">iPECS UCS</h4>
            <div className="card">
              <div className="row justify-content-center">
              <img src="/images/iPECSUCS/presence.png" className="col" alt="alert" />
                <img src="/images/iPECSUCS/messaging.jpeg" className="col" alt="alert" />
                <img src="/images/iPECSUCS/call.jpeg" className="col" alt="alert" />
              </div>
              <div className="card-body mt-4">
                <p className="card-text">iPECS UCS is a collaboration application that provides presence, instant messaging, voice, and video calling capabilities. As a part of the team, I developed instant messaging, call features, and Core Data wrapper.</p>
                <a href="https://apps.apple.com/au/app/ipecs-ucs-6/id1239680008" target="_blank" rel="noreferrer">
                  <img src="/images/appstorebadge.png" alt="app store"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h4 className="text-center mb-5">Line</h4>
            <div className="card">
              <div className="row justify-content-center">
                <div className="col"></div>
                <img src="/images/Line/timeline.png" className="col" alt="alert" />
                <div className="col"></div>
              </div>
              <div className="card-body mt-4">
                <p className="card-text">Line is a globally renowned social networking, mobile messenger app. Working in a contract role for 5 months, I developed the functionalities on the timeline tab.</p>
                <a href="https://apps.apple.com/au/app/line/id443904275" target="_blank" rel="noreferrer">
                  <img src="/images/appstorebadge.png" alt="app store"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center pt-5 mb-4">Personal Projects</h2>
        <div className="row row-cols-1 row-cols-md-1 g-5">
          <div className="col">
            <h4 className="text-center mb-5">URL Album</h4>
            <div className="card">
              <div className="row justify-content-center">
                <img src="/images/URLAlbum/share.png" className="col" alt="alert" />
                <img src="/images/URLAlbum/grid.png" className="col" alt="alert" />
                <img src="/images/URLAlbum/smallgrid.png" className="col" alt="alert" />
              </div>
              <div className="row justify-content-center">
                <img src="/images/URLAlbum/reviews.png" id="review" alt="alert" />
              </div>
              <div className="card-body mt-4">
                <p className="card-text">URL Album is designed for users to collect their bookmarks from the web and to visualize them through 3 different layout options.</p>
                <p>Launched in Jan 2021, the app will grow to have more features such as file operations, search, and integration with 3rd party Open Graph service.</p>
                <p>Technologies used: Swift, UIKit, Share extension, Core Data, App Groups, Cloud Kit</p>
                <a href="https://apps.apple.com/app/id1548111446" target="_blank" rel="noreferrer">
                  <img src="/images/appstorebadge.png" alt="app store"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h4 className="text-center mb-5">Foodie</h4>
            <div className="card">
              <div className="row justify-content-center">
              <img src="/images/Foodie/foodie.gif" className="col" alt="alert" />
                <img src="/images/Foodie/detail.png" className="col" alt="alert" />
                <img src="/images/Foodie/review.png" className="col" alt="alert" />
              </div>
              <div className="card-body mt-4">
                <p className="card-text">A food app providing restaurant information about price, location, photos, reviews, and more. I experimented with building modern app layouts, Yelp Rest API, and some unit testings in this personal project.</p>
                <p>Technologies used: Swift, UIKit, MapKit, Compositional Layout.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <h4 className="text-center mb-5">IELTSQ</h4>
            <div className="card">
              <div className="row justify-content-center">
                <img src="/images/IELTSQ/ieltsq.gif" className="col" alt="alert" />
                <img src="/images/IELTSQ/ieltsq.png" className="col" alt="alert" />
              </div>
              <div className="card-body mt-4">
                <p className="card-text">IELTSQ helps IELTS English exam takers effectively prepare for the speaking section by providing recent speaking test topics monthly. Users can practice these recent asked speaking topics under the same time frame in the real IELTS exams and record themselves for review.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
              <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              </a>
              <span class="text-muted">2021 Jin Lee</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3">
                <a class="text-muted footer-icon" href="https://www.linkedin.com/in/jinthislife" target="_blank" rel="noreferrer">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="text-muted footer-icon" href="https://github.com/jinthislife" target="_blank" rel="noreferrer">
                  <i class="fab fa-github-square"></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="text-muted footer-icon" href="mailto:reyaong@gmail.com" target="_blank" rel="noreferrer">
                  <i class="far fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
