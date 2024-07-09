import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ArticleType } from "../../types";
import { articles } from "../../data/articleList";

const AtriclePage = () => {
  const params = useParams();

  console.log(params.id);
  const [article, setArticle] = useState<ArticleType | undefined>(
    articles.find((a) => {
      return a.id.toString() == params.id;
    })
  );

  return (
    <div>
      <p>{article?.title}</p>
      <p>{article?.article}</p>
    </div>
  );
};

export default AtriclePage;
