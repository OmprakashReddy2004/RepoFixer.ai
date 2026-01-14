import { useState } from "react";
import "../CSS/video.css";

export default function Video() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  const fetchRepos = async () => {
    try {
      const res = await fetch("/api/auth/github/repos/", {
  credentials: "include",
});

      if (!res.ok) {
        throw new Error("Not authenticated");
      }

      const data = await res.json();
      setRepos(data);
    } catch (err) {
      setError("Please connect GitHub first");
    }
  };

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
          <button className="pill" onClick={fetchRepos}>
            🌐 <span>Git Repo</span>
          </button>

          <button className="pill workspace">
            <span className="dot" />
            <span>Branch</span>
          </button>

          <button className="send">➤</button>
        </div>
      </div>

      {error && <p className="task">{error}</p>}

      {repos.length > 0 && (
        <div className="repo-list">
          {repos.map((repo) => (
            <div key={repo.full_name}>
              {repo.full_name}
            </div>
          ))}
        </div>
      )}

      <p className="task">Limited to 1 hour per task. We are not funded.</p>
    </div>
  );
}
