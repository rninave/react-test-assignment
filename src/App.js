import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import './assets/scss/style.scss'
import Index from './page/Index';
import Leftsidebar from './components/Leftsidebar'
import Rightsidebar from './components/Rightsidebar'
import Profileintro from './components/profileintro';

function App() {
  return ( 
    <div className='body-bg'>
      <div className='intro-sec'>
        <Profileintro></Profileintro>
      </div>

      <div className='main py-5'>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-3 mb-lg-0 mb-3'>
            <Leftsidebar></Leftsidebar>
          </div>

          <div className='col-lg-6 mb-lg-0 mb-3'>
            <Index></Index>
          </div>

          <div className='col-lg-3'>
            <Rightsidebar></Rightsidebar>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
