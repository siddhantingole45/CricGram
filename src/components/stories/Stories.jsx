import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Virat Kohli",
      img: "https://i.pinimg.com/736x/42/d6/6e/42d66e2076bb5998ff5c9afb8b950f24.jpg",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      img: "https://i.pinimg.com/736x/c5/86/7a/c5867a99bf635b0b5504f93f7184cffb.jpg",
    },
    {
      id: 3,
      name: "Jasprit Bumrah",
      img: "https://i.pinimg.com/736x/f7/96/83/f796835d422e47642f6754c1b4cef051.jpg",
    },
    {
      id: 4,
      name: "Hardik Pandya",
      img: "https://i.pinimg.com/736x/8f/ec/57/8fec57ed6c18aeca18cc5f8fe2a26584.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src="https://i.pinimg.com/564x/61/9e/31/619e3108a292a8f5dc963b0876209c2f.jpg" alt="" />
          <span>Siddhant</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories