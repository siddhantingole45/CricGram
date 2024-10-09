import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Rohit Sharma",
      userId: 1,
      profilePic:
        "https://i.pinimg.com/736x/ab/f8/39/abf8394c3649c1f9c4676aa3ec801e18.jpg",
        img: "https://i.pinimg.com/736x/17/ea/98/17ea98d898febd057188a118b1954dc5.jpg",
        desc: "This picture epitomises how I’m feeling right now. So many words but can’t find the right ones to express what yesterday meant to me but I will, and I will share them, but right now I’m basking in a dream come true for a billion of us.",
    },
    {
      id: 2,
      name: "Virat Kohli",
      userId: 2,
      profilePic:
      "https://i.pinimg.com/736x/8f/e1/72/8fe172775486b04dc70cd5e8e041b830.jpg",
      img: "https://i.pinimg.com/736x/d9/2e/3a/d92e3a50f77dfe930a070837bcf19bf8.jpg",
      desc: "Couldn’t have dreamt of a better day than this. God is great and I bow my head in gratitude. We finally did it 🇮🇳❤️🇮🇳❤️jai hind ❤️❤️❤️",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
