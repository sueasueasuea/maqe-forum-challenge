import { AuthorsMap } from "../data/authors";
import "./blog.css";
type Props = {
  author_id: number;
  title: string;
  body: string;
  image_url: string;
  created_at: string;
};

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};

const BlogCard = ({ author_id, title, body, image_url, created_at }: Props) => {
  const author = AuthorsMap[author_id];
  const date = new Date(created_at);
  return (
    <div className="BlogCard rounded-sm shadow-md w-full h-full flex flex-col transform transition hover:scale-[1.01]">
      <div className="flex items-center gap-1 py-2 px-4">
        <img className="w-6 h-6 rounded-full" src={author.avatar_url}></img>
        <p className="text-[#f9390b] text-sm font-medium">{author.name}</p>
        <p className="text-[#768796] text-sm font-normal">
          posted on {date.toLocaleDateString("en-US", options)}
        </p>
      </div>
      <div className="Divider w-full h-[1px]"></div>
      <div className="flex w-full h-full p-4 space-x-4">
        <img className="w-[300px] h-full object-cover" src={image_url}></img>
        <div className="space-y-2">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-base font-normal">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
