import "../CSS/video.css";

export default function Video() {
  return (
    <div className="video-wrapper">
      <div className="video">
        <video src=""></video>
      </div>

      <div className="inputbar">
        <input
          type="text"
          placeholder="Tell your AI what to do on the computer..."
        />

        <div className="right">
          <button className="pill">
            🌐 <span>Git Repo</span>
          </button>

          <button className="pill workspace">
            <span className="dot" />
            <span>Branch</span>
          </button>

          <button className="send">➤</button>
        </div>
      </div>

      <p className="task">Limited to 1 hour per task. We are not funded.</p>
    </div>
  );
}
