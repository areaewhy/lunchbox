import React from "react";

export function Playlist({ tracks }) {
  console.log(tracks);
  return (
    <ul>
      {tracks.map((t) => (
        <li key={t.id} data-src={t.file["mp3-128"]}>
          {t.title}
        </li>
      ))}
    </ul>
  );
}
export default Playlist;
