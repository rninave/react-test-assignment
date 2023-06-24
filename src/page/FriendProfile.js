
import Leftsidebar from '../components/Leftsidebar';
import Profileintro from '../components/profileintro';

function FriendProfile() {
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

          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendProfile;
