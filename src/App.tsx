import BlogCard from "./components/blog-card";
import posts from "./data/posts.json";

function App() {
  const BlogList = () => {
    return posts.map((post) => {
      return <BlogCard key={post.id} {...post} />;
    });
  };

  return (
    <div className="flex flex-col justify-center mx-[8rem] my-[2rem] gap-4">
      <h1 className="text-3xl font-[600] mb-2">MAQE Forum</h1>
      <p>Your current timezone is: Asia/Bangkok</p>
      <div className="flex flex-col space-y-4">
        <BlogList />
      </div>
    </div>
  );
}
export default App;
