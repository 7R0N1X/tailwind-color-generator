import { Badge } from "@components/Badge";
import type { Article } from "@constants/articles";

export const ArticleCard = ({ imageUrl, alt, title, tags }: Article) => {
  const color = "#FB2E38";
  return (
    <article className="flex gap-4 rounded-lg border-l-4 bg-neutral-800 p-3" style={{ borderColor: `${color}` }}>
      <img src={imageUrl} alt={alt} className="size-20 rounded-xl object-cover" />
      <div className="flex flex-col justify-center gap-2">
        <h2 className="leading-[19px] font-medium text-gray-50">{title}</h2>
        <div className="flex gap-2">
          {tags.map(({ tag }, index) => (
            <Badge key={index} title={tag} bgColor="#FB2E38" />
          ))}
        </div>
      </div>
    </article>
  );
};
