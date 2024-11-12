import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#da291c',
    },
    secondary: {
      main: '#3f3f40',
    },
  },
});

function App() {
  return (
    <div >
      <ThemeProvider theme={Theme}>
        <Sidebar >
          <Form />
        </Sidebar>
      </ThemeProvider>
    </div>
  );
}

export default App;
