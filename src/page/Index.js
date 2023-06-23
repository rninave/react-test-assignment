import React from "react";
import { useState } from "react";
import profile_4 from '../assets/images/profile_4.jpg';
import Bird_video from '../assets/images/bird-video.mp4';

function Index() {

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };
  const handleDislikeClick = () => {
    setDislikeCount(dislikeCount + 1);
  };

  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    setDisplayValue(inputValue);
    setInputValue('');
  };

  return (
    <div className="post-part">
      <div className="card rounded-0 border-0 mb-3 bg-light-gray">
        <img src={profile_4} className="card-img-top rounded-0" alt="..."></img>
        <div className="card-body">
          <div class="d-flex align-items-md-center mb-3">
            <div className="post-img me-3">
              <img src={profile_4} className="img-fluid"></img>
            </div>
            <div className="d-md-flex align-items-center justify-content-between w-100">
              <div className="mb-md-0 mb-2">
                <h6 href="#" className="text-decoration-none username mb-1 primary-color">Diana Amber</h6>
                <p className="m-0 font-12">10 min ago</p>
              </div>
              <div className="d-flex align-items-center">

                <button className="border-0 bg-transparent d-flex align-items-center me-3" onClick={handleLikeClick}> <span class="material-icons me-1 font-16 like-icon">
                  thumb_up
                </span> <span>{likeCount}</span>
                </button>

                <button className="border-0 bg-transparent d-flex align-items-center" onClick={handleDislikeClick}> <span class="material-icons me-1 font-16 dislike-icon">
                  thumb_down
                </span> <span>{dislikeCount}</span>
                </button>

              </div>
            </div>
          </div>
          <div className="post-description">
            <p className="m-0 border-bottom border-top py-3 mb-3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
            <div class="d-flex align-items-start mb-md-4 mb-3">
              <div className="post-img me-3">
                <img src={profile_4} className="img-fluid"></img>
              </div>
              <p className="m-0"><span className="primary-color fw-bold">Hello </span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </div>
            <div class="d-flex align-items-start mb-md-4 mb-3">
              <div className="post-img me-3">
                <img src={profile_4} className="img-fluid"></img>
              </div>
              <p className="m-0"><span className="primary-color fw-bold">Hello </span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </div>
            <div class="d-flex align-items-start mb-md-4 mb-3">
              <div className="post-img me-3">
                <img src={profile_4} className="img-fluid"></img>
              </div>
              <div>{displayValue}</div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div className="post-img me-3">
                <img src={profile_4} className="img-fluid"></img>
              </div>
              <input className="w-100 post-comment-input px-2 py-1 me-2" placeholder="Post a comment" value={inputValue} onChange={handleChange} />
              <button className="btn btn-primary rounded-100" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card rounded-0 border-0 mb-3 bg-light-gray">
        <video controls className="card-img-top rounded-0 post-video" alt="...">
          <source src={Bird_video}></source>
        </video>
        <div className="card-body">
          <div class="d-flex align-items-md-center mb-3">
            <div className="post-img me-3">
              <img src={profile_4} className="img-fluid"></img>
            </div>
            <div className="d-md-flex align-items-center justify-content-between w-100">
              <div className="mb-md-0 mb-2">
                <h6 href="#" className="text-decoration-none username mb-1 primary-color">Diana Amber</h6>
                <p className="m-0 font-12">2hr ago</p>
              </div>
              <div className="d-flex align-items-center">
                <button className="border-0 bg-transparent d-flex align-items-center me-3" onClick={handleLikeClick}> <span class="material-icons me-1 font-16 like-icon">
                  thumb_up
                </span> <span>{likeCount}</span>
                </button>

                <button className="border-0 bg-transparent d-flex align-items-center" onClick={handleDislikeClick}> <span class="material-icons me-1 font-16 dislike-icon">
                  thumb_down
                </span> <span>{dislikeCount}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="post-description">
            <p className="m-0 border-bottom border-top py-3 mb-3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
            <div class="d-flex align-items-start mb-md-4 mb-3">
              <div className="post-img me-3">
                <img src={profile_4} className="img-fluid"></img>
              </div>
              <p className="m-0"><span className="primary-color fw-bold">Hello </span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </div>
            <div class="d-flex align-items-start mb-md-4 mb-3">
              <div className="post-img me-3">
                <img src={profile_4} className="img-fluid"></img>
              </div>
              <p className="m-0">{displayValue}</p>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div className="post-img me-3">
                <img src={profile_4} className="img-fluid"></img>
              </div>
              <input className="w-100 post-comment-input px-2 py-1 me-2" placeholder="Post a comment" value={inputValue} onChange={handleChange} />
              <button className="btn btn-primary rounded-100" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
