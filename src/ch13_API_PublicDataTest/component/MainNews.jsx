import React, { useCallback, useState } from "react";
import NewsList from "./NewsList";
import Categories from "./Categories";

const MainNews = () => {
  const [category, setCategory] = useState("all");

  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    <div>
      <h1>MainNews</h1>
      {/* 부모컴포넌트에서 props속성으로 전달
      1) 선택된 카테고리 값 2) 카테고리 선택 함수 */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};

export default MainNews;
<NewsList />;
