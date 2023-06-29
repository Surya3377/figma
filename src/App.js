import React from "react";
import "./App.css";
import groupBusiness from "./assets/Images/group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1.png";
import everyoneSmiling from "./assets/Images/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1.png";
import ReviewPerson from "./assets/Images/Lolla 1.png";
import rating from "./assets/Images/Frame 20.png";
import frame from "./assets/Images/Frame 85.png";
import loader from "./assets/Images/Frame 84.png";
import socialMedia from "./assets/Images/Frame 90.png";

const App = () => {
  return (
    <div className="body">
      <header className="header">
        <div className="header_left">logo</div>
        <div className="header_right">
          <h3>About</h3>
          <h3>Pricing</h3>
          <h3>Review</h3>
        </div>
      </header>
      <div className="content">
        <div className="content_left">
          <h2>Learn how to launch a successful podcast</h2>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </h3>
          <button>Sign up Now</button>
        </div>
        <div className="content_right">
          <img
            src={everyoneSmiling}
            alt="Everyone Smiling and Listening"
            height="281px"
            width="491px"
            style={{
              borderRadius: "10px",
              position: "relative",
            }}
          />
          <img
            src={groupBusiness}
            alt="Group Business Workers Smiling"
            height="281px"
            width="491px"
            style={{
              borderRadius: "10px",
              position: "absolute",
              marginTop: "70px",
              marginLeft: "-540px",
            }}
          />
        </div>
      </div>
      <div className="contentTwo">
        <div className="contentTwo_left">
          <div className="contentTwo_left_sideOne">
            <div className="contentTwo_left_one">
              <h3>Interactive Features</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
            <div className="contentTwo_left_two">
              <h3>Interactive Features</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
          </div>
          <div className="contentTwo_left_sideTwo">
            <div className="contentTwo_left_three">
              <h3>Interactive Features</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
            <div className="contentTwo_left_four">
              <h3>Interactive Features</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
          </div>
        </div>
        <div className="contentTwo_right">
          <h2>About the Course</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unkno
          </p>
          <button>Explore Now</button>
        </div>
      </div>
      <div className="plans">
        <h3>Choose your plan</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          <br /> typesetting industry. Lorem Ipsum has been the industry's{" "}
        </p>
        <button className="monthly">monthly</button>
        <button className="yearly">yearly</button>
      </div>
      <div className="subscription">
        <div className="Basicplan">
          <h4>Basic Plan</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <h3>$ 54 /month</h3>
          <ul>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
          </ul>
          <button>Start Free Trial</button>
        </div>
        <div className="Premiumplan">
          <h4>Premium Plan</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <h3>$ 54 /month</h3>
          <ul>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
          </ul>
          <button>Start Free Trial</button>
        </div>
        <div className="BasicPlan2">
          <h4>Basic Plan</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <h3>$ 54 /month</h3>
          <ul>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
          </ul>
          <button>Start Free Trial</button>
        </div>
      </div>
      <div className="Review">
        <div className="Review_details">
          <h2>Review from customers</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry
          </p>
        </div>
      </div>
      <div className="Review_Persons">
        <div className="overall_review">
          <div className="Review_Person1">
            <img src={ReviewPerson} alt="review Person image" />
          </div>
          <div className="Review_Person1_content">
            <h4>Lolla Smith</h4>
            <p>Microsoft</p>
            <img src={rating} alt="rating" />
          </div>
          <div className="review_person1_description">
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </h5>
          </div>
        </div>
        <div className="overall_review">
          <div className="Review_Person1">
            <img src={ReviewPerson} alt="review Person image" />
          </div>
          <div className="Review_Person1_content">
            <h4>Lolla Smith</h4>
            <p>Microsoft</p>
            <img src={rating} alt="rating" />
          </div>
          <div className="review_person1_description">
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </h5>
          </div>
        </div>{" "}
        <div className="overall_review">
          <div className="Review_Person1">
            <img src={ReviewPerson} alt="review Person image" />
          </div>
          <div className="Review_Person1_content">
            <h4>Lolla Smith</h4>
            <p>Microsoft</p>
            <img src={rating} alt="rating" />
          </div>
          <div className="review_person1_description">
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </h5>
          </div>
        </div>
      </div>
      <div className="frame">
        <img src={frame} alt="frame" />
      </div>
      <div className="loader">
        <img src={loader} alt="loader" />
      </div>
      <div className="gradiant">
        <div className="opportunity">
          <h3>We have what you’re looking for</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
            <br /> the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of
            <br /> type a
          </p>
          <button>Get Started Now</button>
        </div>
        <div className="footer">
          <div className="copyright">
            <p>All Right Reserved @Copyright 2023</p>
          </div>
          <div className="terms">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Product</p>
            <div className="socialMedia">
              <img src={socialMedia} alt="scoialMedia" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
