import ProfileCard from "./ProfileCard";
import AfroImage from "./images/afrodelice.png";
import Clock from "./images/clock.png";
import Search from "./images/search.png";
import CRUD from "./images/crud.png";
import Watch from "./images/watch.png";

const ProjectCard = () => {
  return (
    <>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                title='Afro Delice'
                handle='@Ecommerce'
                imageUrl={AfroImage}
                description='A UI of an African food restaurant'
                githubUrl='https://github.com/Tochiskool/afrodelicetrieste'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='REACTJS'
                handle='@digitalClock2024'
                imageUrl={Clock}
                description='A modern clock'
                githubUrl='https://github.com/Tochiskool/react-digital-clock'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Search engine'
                handle='@REACTJS'
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
              className='column is-6
            '
            >
              <ProfileCard
                title='Mern stack app'
                handle='@MERN_STACK'
                imageUrl={CRUD}
                description='A scalable Mern stack app'
                githubUrl={"https://github.com/Tochiskool/crud-app"}
              />
            </div>
            <div
              className='column is-6
            '
            >
              <ProfileCard
                title='Mern stack app'
                handle='@VANILLA JS'
                imageUrl={Watch}
                description='A stop watch'
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
