import ProfileCard from "./ProfileCard";
import AfroImage from "./images/afrodelice.png";
import Clock from "./images/clock.png";
import Search from "./images/search.png";
import CRUD from "./images/crud.png";

const ProjectCard = () => {
  return (
    <>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                title='Afro Delice'
                handle='@alexa99'
                imageUrl={AfroImage}
                description='A UI of an African food restaurant'
                githubUrl='https://github.com/Tochiskool/afrodelicetrieste'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Digital Clock'
                handle='@digitalClock2024'
                imageUrl={Clock}
                description='A modern clock'
                githubUrl='https://github.com/Tochiskool/react-digital-clock'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Search engine'
                handle='@searching images'
                imageUrl={Search}
                description='A scalable search engine'
                githubUrl={
                  "https://github.com/Tochiskool/search-engine/tree/main"
                }
              />
            </div>
          </div>
        </section>
      </div>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div
              className='column is-12
            '
            >
              <ProfileCard
                title='Mern stack app'
                handle='@mongodb'
                imageUrl={CRUD}
                description='A scalable Mern stack app'
                githubUrl={"https://github.com/Tochiskool/crud-app"}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectCard;
