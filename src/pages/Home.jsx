function Home() {
  return (
    <>
      <div className="container">
        <div className="works_hero">
          <div className="works_hero_left">
            <h1 className="works_hero_intro">
              Hi, I am John, <br /> Creative Technologist
            </h1>
            <p className="works_hero_description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="works_hero_button">Download Resume</button>
          </div>
          <img
            className="works_hero_avatar"
            src="./john-avatar.svg"
            alt=""
            width={243}
            height={243}
          />
        </div>
      </div>
      <section className="recent-post">
        <div className="container">
          <div className="recent">
            <span className="recent_heading">Recent posts</span>
            <p className="recent_view">View all</p>
          </div>
          <div className="recent_cards">
            <div className="recent_card1">
              <h2 className="recent_card1_title">
                Making a design system from scratch
              </h2>
              <div className="recent_card1_center">
                <span className="card1_date">12 Feb 2020</span>
                <span className="divide-sign">|</span>
                <span className="card1_name">Design, Pattern</span>
              </div>
              <p className="card1_description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="recent_card1">
              <h2 className="recent_card1_title">
                Creating pixel perfect icons in Figma
              </h2>
              <div className="recent_card1_center">
                <span className="card1_date">12 Feb 2020</span>
                <span className="divide-sign">|</span>
                <span className="card1_name">Figma, Icon Design</span>
              </div>
              <p className="card1_description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h4 className="featured_title">Featured works</h4>
        <div className="featured_works">
          <div className="featured_works_card">
            <img
              className="card_image"
              src="./dashboard.svg"
              alt=""
              width={246}
              height={180}
            />
            <div className="card_right">
              <h3 className="card_title">Designing Dashboards</h3>
              <div className="card_year">
                <span className="card_year_icon">2020</span>
                <span className="card_name">Dashboard</span>
              </div>
              <p className="card_description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="featured_works_card">
            <img
              className="card_image"
              src="./illustration.svg"
              alt=""
              width={246}
              height={180}
            />
            <div className="card_right">
              <h3 className="card_title">Vibrant Portraits of 2020</h3>
              <div className="card_year">
                <span className="card_year_icon">2018</span>
                <span className="card_name">Illustrtion</span>
              </div>
              <p className="card_description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="featured_works_card">
            <img
              className="card_image"
              src="./malayalam.svg"
              alt=""
              width={246}
              height={180}
            />
            <div className="card_right">
              <h3 className="card_title">36 Days of Malayalam type</h3>
              <div className="card_year">
                <span className="card_year_icon">2018</span>
                <span className="card_name">Typography</span>
              </div>
              <p className="card_description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
