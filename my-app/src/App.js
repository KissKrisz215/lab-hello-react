import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
    <div class="container-fluid bg-darkblue">
    <NavBar />
    <div class="container d-flex flex-column py-5">
    <div class="w-50 text-white py-5 text-start">
       <h1 class="fs-xxl fw-bold">Say hello to ReactJS</h1>
       <p class="fs-5 w-50">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
       <button class="btn btn-light fs-5 rounded-1 fw-bold px-4 py-3 my-5">Awesome!</button>
       </div>
    </div>
    </div>
    <div class="container-fluid py-5">
    <div class="container py-5">
    <Gallery />
    </div>
    </div>
    </div>
  );
}

export default App;

<div class="navbar navbar-expand">

</div>