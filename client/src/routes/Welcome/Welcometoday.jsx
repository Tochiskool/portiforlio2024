import mypic from "./images/chris.jpeg";
import "./welcome.css";

const Welcometoday = () => {
  return (
    <section style={{ marginTop: "1rem" }}>
      <div className='container'>
        <div className='row'>
          <div className='col-1-3 pull-right-sm centerImage '>
            <div>
              <img
                src={mypic}
                style={{
                  width: "80%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "60%",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div className='col-2-3 styleCard'>
            <h3>
              Junior FullStack Developer{" "}
              <em>
                <span data-descr='Mongo Express React Node'>MERN STACK</span>
              </em>
            </h3>
            <p>
              My name is A Christian N and am ready to work with your company or
              to join your team. I am diffused through with an overwhelming joy
              that comes from putting in the hardwork and getting results. This
              portfolio's mission is to demonstrate how much I understand and
              the prospects I have as a software developer. I will be more than
              delighted to get a message from you.
            </p>
            <div className='resources'>
              <h3>My stack</h3>
              <ul className='links'>
                <li>Operating system Mac</li>
                <li>Version control / Collaboration: Git/Github/</li>
                <li>REACT</li>
                <li>Mongodb/ Mongoose</li>
                <li>Mysql/Sequelize</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>Object oriented Javascript</li>
                <li>Ajax</li>
                <li>Jquery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcometoday;
