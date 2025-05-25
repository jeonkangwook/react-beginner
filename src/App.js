import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from "./routes/Home";
import Detail from "./routes/Detail"

// 영화 리스트 보여주기기
function App(){
    return (
    <Router>
        <Routes>
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/" element={<Home />} />   
        </Routes>
    </Router>
    )
}

export default App;
