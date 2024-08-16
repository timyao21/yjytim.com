import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer.js';
import Header from './components/Header.js'

function App() {
    return (
        <div className="App">
            <div>
                <HashRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        
                    </Routes>
                </HashRouter>
            </div>
            <Footer />
        </div>
    );
}

  export default App;
