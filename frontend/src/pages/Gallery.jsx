import { useState, useEffect, useRef } from "react";
import video1 from "../assets/videos/video1.mp4";
import image1 from "../assets/images/gallery1.png";
import image2 from "../assets/images/gallery2.png";
import image3 from "../assets/images/gallery3.png";
import image4 from "../assets/images/gallery4.png";
import image5 from "../assets/images/gallery5.png";
import image6 from "../assets/images/gallery6.png";
import image7 from "../assets/images/gallery7.png";

export default function Gallery() {
  const [selectedImageId, setSelectedImageId] = useState(null);
  const imageRefs = useRef({});

  const galleryImages = [
    {
      id: 1,
      src: image2,
      type: "central",
      position: "center",
    },
    {
      id: 2,
      src: image6,
      type: "small",
      position: "top-left",
    },
    {
      id: 3,
      src: image1,
      type: "small",
      position: "top-right",
    },
    {
      id: 4,
      src: image3,
      type: "small",
      position: "bottom-left",
    },
    {
      id: 5,
      src: image4,
      type: "small",
      position: "bottom-right",
    },
    {
      id: 6,
      src: image5,
      type: "small",
      position: "left-middle",
    },
    {
      id: 7,
      src: image7,
      type: "small",
      position: "right-middle",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImageId(image.id);
  };

  const closeZoom = () => {
    setSelectedImageId(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeZoom();
      }
    };

    if (selectedImageId) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImageId]);

  return (
    <div className="gallery-container">
      <div className="page-header">
        <h1>Our Work</h1>
        <p>Explore our innovative projects and team moments</p>
      </div>

      <div className="gallery-collage">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            ref={(el) => (imageRefs.current[image.id] = el)}
            className={`gallery-item ${image.type} ${image.position} ${
              selectedImageId === image.id ? "gallery-item-zoomed" : ""
            }`}
            onClick={() => handleImageClick(image)}
          >
            {image.mediaType === "video" ? (
              <video
                src={image.src}
                className="gallery-video"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img src={image.src} alt={`Gallery ${image.id}`} />
            )}

            <div className="gallery-item-overlay"></div>
          </div>
        ))}
      </div>

      {selectedImageId && (
        <div className="gallery-backdrop" onClick={closeZoom}></div>
      )}
    </div>
  );
}
