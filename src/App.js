import { ThemeProvider } from "styled-components"
import theme from "./components/theme"
import EntryPage from "./components/pages/EntryPage/EntryPage"

const App = () => (
  <ThemeProvider theme={theme}>
    <EntryPage />
  </ThemeProvider>
)

export default App
