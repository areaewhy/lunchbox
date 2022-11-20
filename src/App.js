import { useEffect, useRef, useState } from "react";
import "./App.css";
import Playlist from "./components/playlist";

export function App() {
  const interval = useRef();
  const [printedTime, setDate] = useState("WHO KNOWS");
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    console.log("render");

    setSongs(
      JSON.parse(
        '[{"id":588444412,"track_id":588444412,"file":{"mp3-128":"https://t4.bcbits.com/stream/b319d510a76438949dd51a840be915ac/mp3-128/588444412?p=0&ts=1666646572&t=0d937076aede991157f42d5945141d3041fa5116&token=1666646572_cace2f585a65496e9cbae70ab121635dd2a6c485"},"artist":null,"title":"Blue Misshapen Dusk","encodings_id":2705071890,"license_type":1,"private":null,"track_num":1,"album_preorder":false,"unreleased_track":false,"title_link":"/track/blue-misshapen-dusk","has_lyrics":false,"has_info":false,"streaming":1,"is_downloadable":true,"has_free_download":null,"free_album_download":false,"duration":141.267,"lyrics":null,"sizeof_lyrics":0,"is_draft":false,"video_source_type":null,"video_source_id":null,"video_mobile_url":null,"video_poster_url":null,"video_id":null,"video_caption":null,"video_featured":null,"alt_link":null,"encoding_error":null,"encoding_pending":null,"play_count":0,"is_capped":false,"track_license_id":null},{"id":434098105,"track_id":434098105,"file":{"mp3-128":"https://t4.bcbits.com/stream/cba07180a16ddb8b104d15b7ee6360b6/mp3-128/434098105?p=0&ts=1666646572&t=08cf246dbd467aca9606b7b2513dfb0c67492a62&token=1666646572_707ea12c5b7c18053b71b3259bad60604f43a6ea"},"artist":null,"title":"Ancestors of Shadow","encodings_id":834217035,"license_type":1,"private":null,"track_num":2,"album_preorder":false,"unreleased_track":false,"title_link":"/track/ancestors-of-shadow","has_lyrics":true,"has_info":false,"streaming":1,"is_downloadable":true,"has_free_download":null,"free_album_download":false,"duration":337.187,"lyrics":null,"sizeof_lyrics":576,"is_draft":false,"video_source_type":null,"video_source_id":null,"video_mobile_url":null,"video_poster_url":null,"video_id":null,"video_caption":null,"video_featured":null,"alt_link":null,"encoding_error":null,"encoding_pending":null,"play_count":0,"is_capped":false,"track_license_id":null},{"id":1796269784,"track_id":1796269784,"file":{"mp3-128":"https://t4.bcbits.com/stream/a06495e62fbbcfe8937fc5622435e760/mp3-128/1796269784?p=0&ts=1666646572&t=e254d6da5f73c9e44e1a6f5202d409ca2cca31f2&token=1666646572_5a77435c3285905081106ceebe8f5d169469f6d6"},"artist":null,"title":"Ancestors of Smoke","encodings_id":834982374,"license_type":1,"private":null,"track_num":3,"album_preorder":false,"unreleased_track":false,"title_link":"/track/ancestors-of-smoke","has_lyrics":true,"has_info":false,"streaming":1,"is_downloadable":true,"has_free_download":null,"free_album_download":false,"duration":609.227,"lyrics":null,"sizeof_lyrics":854,"is_draft":false,"video_source_type":null,"video_source_id":null,"video_mobile_url":null,"video_poster_url":null,"video_id":null,"video_caption":null,"video_featured":null,"alt_link":null,"encoding_error":null,"encoding_pending":null,"play_count":0,"is_capped":false,"track_license_id":null},{"id":3967136052,"track_id":3967136052,"file":{"mp3-128":"https://t4.bcbits.com/stream/9a4d136042c42154b56bc350bc6851bb/mp3-128/3967136052?p=0&ts=1666646572&t=572de2080cc0a94eabccddede2ca4dc9c77c6279&token=1666646572_f51d68ab19ab7097bf3be7236ef9052b38c3ab2a"},"artist":null,"title":"Waxen Voices","encodings_id":609007952,"license_type":1,"private":null,"track_num":4,"album_preorder":false,"unreleased_track":false,"title_link":"/track/waxen-voices","has_lyrics":true,"has_info":false,"streaming":1,"is_downloadable":true,"has_free_download":null,"free_album_download":false,"duration":650.88,"lyrics":null,"sizeof_lyrics":1300,"is_draft":false,"video_source_type":null,"video_source_id":null,"video_mobile_url":null,"video_poster_url":null,"video_id":null,"video_caption":null,"video_featured":null,"alt_link":null,"encoding_error":null,"encoding_pending":null,"play_count":0,"is_capped":false,"track_license_id":null},{"id":1567650250,"track_id":1567650250,"file":{"mp3-128":"https://t4.bcbits.com/stream/9b94c57ee7f5587f9e2d8f604c7d5d5b/mp3-128/1567650250?p=0&ts=1666646572&t=44bdf17fdfec31275b727467bf54de630b9153b0&token=1666646572_5f14e9bbf6383bacbe1d33c830294c24c5f3eb7f"},"artist":null,"title":"Spectral Eyes","encodings_id":3353541730,"license_type":1,"private":null,"track_num":5,"album_preorder":false,"unreleased_track":false,"title_link":"/track/spectral-eyes","has_lyrics":true,"has_info":false,"streaming":1,"is_downloadable":true,"has_free_download":null,"free_album_download":false,"duration":513.733,"lyrics":null,"sizeof_lyrics":1429,"is_draft":false,"video_source_type":null,"video_source_id":null,"video_mobile_url":null,"video_poster_url":null,"video_id":null,"video_caption":null,"video_featured":null,"alt_link":null,"encoding_error":null,"encoding_pending":null,"play_count":0,"is_capped":false,"track_license_id":null},{"id":2607471580,"track_id":2607471580,"file":{"mp3-128":"https://t4.bcbits.com/stream/7cb692e49c4dce304ae0c184c4644f87/mp3-128/2607471580?p=0&ts=1666646572&t=97528ff483b42c09a6ab147f3cfca58c137ca45f&token=1666646572_5cf1584b5f4f5d1b89690a6399262194e311b48e"},"artist":null,"title":"Believe in No Coming Shore","encodings_id":1654149865,"license_type":1,"private":null,"track_num":6,"album_preorder":false,"unreleased_track":false,"title_link":"/track/believe-in-no-coming-shore","has_lyrics":false,"has_info":false,"streaming":1,"is_downloadable":true,"has_free_download":null,"free_album_download":false,"duration":269.92,"lyrics":null,"sizeof_lyrics":0,"is_draft":false,"video_source_type":null,"video_source_id":null,"video_mobile_url":null,"video_poster_url":null,"video_id":null,"video_caption":null,"video_featured":null,"alt_link":null,"encoding_error":null,"encoding_pending":null,"play_count":0,"is_capped":false,"track_license_id":null}]'
      )
    );

    interval.current = setInterval(() => {
      console.log("tick");
      var now = new Date().toLocaleString();
      setDate(now);
    }, 1000);
    return () => {
      console.log("teardown");
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="App">
      {printedTime}
      {songs ? <Playlist tracks={songs} /> : "NULL"}
    </div>
  );
}

export default App;