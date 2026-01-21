import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import KitchenRemodeling from './pages/KitchenRemodeling';
import BathroomRenovation from './pages/BathroomRenovation';
import FlooringInstallation from './pages/FlooringInstallation';
import CountertopInstallation from './pages/CountertopInstallation';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services/kitchen" element={<KitchenRemodeling />} />
                    <Route path="/services/bathroom" element={<BathroomRenovation />} />
                    <Route path="/services/flooring" element={<FlooringInstallation />} />
                    <Route path="/services/countertops" element={<CountertopInstallation />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
