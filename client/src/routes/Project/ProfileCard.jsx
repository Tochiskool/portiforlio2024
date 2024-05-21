import { Link } from "react-router-dom";
import "../Feature/style.css";

const ProfileCard = ({ title, handle, imageUrl, description, githubUrl }) => {
  return (
    <>
      <section className='card' style={{ backgroundColor: "#d5cdc9" }}>
        <div className='card-image'>
          <figure className='image is-1bl'>
            <img src={imageUrl} alt={"Picture of " + title} />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media-content'>
            <p className='title is-4'>{title} </p>
            <p className='subtitle is-6'>{handle} </p>
          </div>
          <div className='content'>
            <p>{description}</p>
            <Link to={githubUrl}>Github repo</Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProfileCard;
