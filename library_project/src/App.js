import AppRouter from './router/AppRouter'; 
import {ThemeProvider} from 'styled-components';
import { GlobalStyles } from './styles/Global.styles';
import { theme } from './styles/theme';
  


function App() {
  return (
    <ThemeProvider theme={theme}>  
    <GlobalStyles/>
    <AppRouter/> 
    </ThemeProvider>
    
     );
}

export default App;
