import "./App.css";
import { BookCall } from "./Sections/BookCall/BookCall";
import { HeaderSection } from "./Sections/HeaderSection/HeaderSection";
import { PricingTable } from "./Sections/PricingTable/PricingTable";
import { Services } from "./Sections/Services/Services";

function App() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <HeaderSection />
      <Services />
      <PricingTable />
      <BookCall />
    </div>
  );
}

export default App;
