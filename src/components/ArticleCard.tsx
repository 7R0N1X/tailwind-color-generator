import { Badge } from "@components/Badge";
import type { Article } from "@constants/articles";
import { useColorPicker } from "@hooks/useColorPicker";

export const ArticleCard = ({ imageUrl, alt, title, tags, avatarUrl, name }: Article) => {
  const { colorPalette } = useColorPicker();
  const bgColor = colorPalette["300"];
  const textColor = colorPalette["50"];
  return (
    <article className="flex gap-4 rounded-lg border-l-4 bg-neutral-800 p-3" style={{ borderColor: `${bgColor}` }}>
      <img src={imageUrl} alt={alt} className="size-20 rounded-xl object-cover" />
      <div className="flex flex-col justify-between gap-2">
        <h2 className="leading-5 font-medium" style={{ color: `${textColor}` }}>
          {title}
        </h2>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-gray-50">
            <img src={avatarUrl} alt="" className="size-7 rounded-full" />
            <span className="text-sm font-medium">{name}</span>
          </div>

          {tags.map(({ tag }, index) => (
            <Badge key={index} title={tag} bgColor={bgColor} />
          ))}
        </div>
      </div>
    </article>
  );
};
