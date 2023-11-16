import React, { useState, useCallback } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

//페이징 처리 해주는 가상의 리스트 불러오기
import { List } from "react-virtualized";

const SearchBar = styled.input`
  flex: 1;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #557c55;
  border-radius: 5px;
  padding: 15px;

  &:focus {
    outline: none;
    border: 1px solid #f875aa;
  }
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRender = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );

  const [search, setSearch] = useState("");

  const onChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const getSearchResult = () => {
    return search === ""
      ? todos
      : todos.filter((todos) =>
          todos.text.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div>
      <h4>Todo List 🧾</h4>
      <SearchBar
        value={search}
        onChange={onChange}
        placeholder="검색어를 입력하세요"
      />

      <List
        width={470}
        height={840}
        rowCount={todos.length}
        rowHeight={84}
        rowRenderer={rowRender}
        list={todos}
        style={{ outline: "none" }}
      >
        {getSearchResult().map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
