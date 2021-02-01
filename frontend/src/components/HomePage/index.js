import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className='home__header'>
        <h1>Cheers, we are glad you are here!</h1>
      </div>
      <div className='home__subheader'>
        <h2>
          Whether you are looking for a wine recommendation or just want to
          learn more, Somm Planet is here for you!
        </h2>
      </div>
      <div className='home__featured-wines'>
        <h2>Featured Wines</h2>
      </div>
      {/* <p>Sign up so you can share your stories with other somm planetiers</p> */}
    </div>
  );
}

export default HomePage;
