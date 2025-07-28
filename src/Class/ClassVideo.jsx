import "./ClassVideo.css";
import { useState } from "react";
import { PlayCircle, Search } from "lucide-react";

const videos = [
  // 8th Standard Videos
  { id: 8, title: "Maths - Rational Irrational", grade: "8th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_1/0.jpg", url: "https://www.youtube.com/embed/3LjGTk9iAI0?si=RPffFqVvcVSSSlps" },
  { id: 8, title: "Maths - Area", grade: "8th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_2/0.jpg", url: "https://www.youtube.com/embed/QS5lvL6UhQc?si=k7TucSiGy8Z-n1KI" },
  { id: 8, title: "Science - Cell And Orginaism", grade: "8th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_1/0.jpg", url: "https://www.youtube.com/embed/feJ3L8s1eAE?si=8nP6ymio0pr9eECr" },
  { id: 8, title: "Science - Living World and Classification of Microbes", grade: "8th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_1/0.jpg", url: "https://www.youtube.com/embed/2DHAmfZV4rI?si=2AchMrXLqH7SqN1e" },
  

  // 9th Standard Videos
  { id: 3, title: "Maths - Construction Of Triangle", grade: "9th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_3/0.jpg", url: "https://www.youtube.com/embed/CxBJMZtyVSs?si=lVJj24xWTk1Eg7UB" },
  { id: 3, title: "Maths - Number System", grade: "9th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_3/0.jpg", url: "https://www.youtube.com/embed/IMnSIaPcqiE?si=YnSKtSTL5Si9K_2D" },
  { id: 4, title: "Chemistry - Substance in Real Life ", grade: "9th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_4/0.jpg", url: "https://www.youtube.com/embed/KW5vFhXezZA?si=nPQJYCDNXESi8Ux6" },
  { id: 4, title: "Chemistry - Substance in Real Life ", grade: "9th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_4/0.jpg", url: "https://www.youtube.com/embed/0EWGXR9HLRA?si=xR7zmLXLrmxs-Rcg" },

  // 10th Standard Videos
  { id: 6, title: "Chemistry - Periodic Classification of Elements", grade: "10th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_6/0.jpg", url: "https://www.youtube.com/embed/xmg_GTx5yM8?si=93Yz3Ks0VI1eAgaI" },
  { id: 5, title: "Physics - Complete PHYSICS ", grade: "10th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_5/0.jpg", url: "https://www.youtube.com/embed/sUtX9SF4pjM?si=roewlmVVxTloeLDP" },
  { id: 6, title: "Maths - Trigonometry", grade: "10th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_6/0.jpg", url: "https://www.youtube.com/embed/DAxxVw6RVBo?si=Azni9UbY01UKRM_i" },
  { id: 6, title: "Maths - Circle", grade: "10th", thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_6/0.jpg", url: "https://www.youtube.com/embed/fPpgPKXbumw?si=OqT7IGEHEocIq9IP" },
];

export default function ClassVideo() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const grades = ["8th", "9th", "10th"];

  return (
    <div className="class-video-container">
      <h1 className="class-video-title">Class Videos</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button">
          <Search size={16} />
        </button>
      </div>

      {grades.map((grade) => (
        <div key={grade} className="grade-section">
          <h2 className="grade-title">{grade} Standard</h2>
          <div className="video-grid">
            {filteredVideos
              .filter((video) => video.grade === grade)
              .map((video) => (
                <div key={video.id} className="video-card">
                  <iframe 
                    className="video-frame"
                    src={video.url} 
                    title={video.title} 
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  <p className="video-title">{video.title}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
