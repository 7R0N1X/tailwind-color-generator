import { ArticleCard } from "@components/ArticleCard";
import { ARTICLES } from "@constants/articles";

export const ArticlesCard = () => {
  return (
    <div className="flex h-fit flex-col justify-between gap-4">
      {ARTICLES.map(({ imageUrl, alt, title, tags, avatarUrl, name }, index) => (
        <ArticleCard
          key={index}
          imageUrl={imageUrl}
          alt={alt}
          title={title}
          tags={tags}
          avatarUrl={avatarUrl}
          name={name}
        />
      ))}
    </div>
  );
};
