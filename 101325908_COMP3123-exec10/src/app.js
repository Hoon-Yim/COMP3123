import { createGlobalStyle } from "styled-components";

import TodoTemplate from "./components/todosTemplate";
import TodosContainer from "./containers/todos";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <TodoTemplate>
        <TodosContainer />
      </TodoTemplate>
    </div>
  );
}

export default App;