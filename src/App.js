import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {
  return (
    <div className="text-center text-white">
      <FontAwesomeIcon icon={brands("react")} />
      <h1 className="text-6xl font-bold">
        BASIC SETUP 
      </h1>
      <h3 className="text-2xl py-4">
        REACT & TAILWIND & FONTAWESOME
      </h3>
    </div>
  );
}

export default App;
