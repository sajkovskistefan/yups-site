import './App.css';
import { HeaderSection } from './Sections/HeaderSection/HeaderSection';
import { Navbar } from './Sections/Navbar/Navbar';
import { Services } from './Sections/Services/Services';

function App() {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <Services />
    </div>
  );
}

export default App;
