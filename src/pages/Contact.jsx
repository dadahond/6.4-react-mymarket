function Contact() {
  return (
    <>
      <div className="container">
        <h4 className="work_title">Works</h4>
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
          <div className="featured_works_card">
            <img
              className="card_image"
              src="./components.svg"
              alt=""
              width={246}
              height={180}
            />
            <div className="card_right">
              <h3 className="card_title">Components</h3>
              <div className="card_year">
                <span className="card_year_icon">2018</span>
                <span className="card_name">Components, Design</span>
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

export default Contact;
