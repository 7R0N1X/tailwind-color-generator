import { ArticleCard } from "@components/ArticleCard";
import { ARTICLES } from "@constants/articles";

export const ArticlesCard = () => {
  return (
    <div className="space-y-4 rounded-xl border border-gray-50/10 bg-neutral-900 p-4">
      {ARTICLES.map(({ imageUrl, alt, title, tags }, index) => (
        <ArticleCard
          key={index}
          imageUrl={imageUrl}
          alt={alt}
          title={title}
          tags={tags}
        />
      ))}
    </div>
  );
};
