import { useState } from "react";
import "./Theme.css";
import ColorCardDetail from "../ColorCardDetail/ColorCardDetail";
import ColorCardPreview from "../ColorCardPreview/ColorCardPreview";

export default function Theme({ name, colors, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <section className="theme">
      <button className="theme__toggle-details-button" onClick={toggleDetails}>
        <h2>{name}</h2>
        {showDetails ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-circle-down"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path d="M12,24A12,12,0,1,0,0,12,12.013,12.013,0,0,0,12,24ZM12,2A10,10,0,1,1,2,12,10.011,10.011,0,0,1,12,2Z" />
            <path d="M12,8a2.993,2.993,0,0,1,1.987.752c.327.291.637.574.84.777L17.7,12.353a1,1,0,1,1-1.4,1.426L13.42,10.95c-.188-.187-.468-.441-.759-.7a1,1,0,0,0-1.323,0c-.29.258-.57.512-.752.693L7.7,13.779a1,1,0,0,1-1.4-1.426L9.178,9.524c.2-.2.507-.48.833-.769A2.99,2.99,0,0,1,12,8Z" />
          </svg>
        ) : (
          <svg
            id="arrow-circle-down"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="30"
            height="30"
          >
            <path
              d="M256,512c141.4,0,256-114.6,256-256S397.4,0,256,0S0,114.6,0,256C0.2,397.3,114.7,511.8,256,512z M256,42.7
	c117.8,0,213.3,95.5,213.3,213.3S373.8,469.3,256,469.3S42.7,373.8,42.7,256C42.8,138.2,138.2,42.8,256,42.7z"
            />
            <path
              d="M257.2,300.7c-15.6,0-30.7-5.7-42.4-16c-7-6.2-13.6-12.2-17.9-16.6l-61.3-60.2c-8.7-7.9-9.4-21.4-1.5-30.1
	c7.9-8.7,21.4-9.4,30.1-1.5c0.4,0.4,0.8,0.8,1.2,1.2l61.4,60.4c4,4,10,9.4,16.2,14.9c8.1,7.1,20.2,7.1,28.2,0
	c6.2-5.5,12.2-10.9,16-14.8l61.6-60.5c8.7-7.9,22.2-7.2,30.1,1.5c7.5,8.2,7.3,20.8-0.3,28.9l-61.4,60.4
	c-4.3,4.3-10.8,10.2-17.8,16.4C288,295,272.9,300.7,257.2,300.7z"
            />
          </svg>
        )}
      </button>
      {showDetails ? (
        <ColorCardDetail colors={colors} onDelete={onDelete} />
      ) : (
        <ColorCardPreview colors={colors} />
      )}
    </section>
  );
}
