import { useEffect } from "react";

export default function Photos() {
  useEffect(() => {
    console.log("Photos: Mounted");
    return () => console.log("Photos: Unmounted");
  }, []);

  const photos = [
    "https://placehold.co/200x150?text=Photo+1",
    "https://placehold.co/200x150?text=Photo+2",
    "https://placehold.co/200x150?text=Photo+3",
  ];

  return (
    <div>
      <h4>Photos</h4>
      <div className="d-flex gap-3 flex-wrap">
        {photos.map((src, i) => (
          <img key={i} src={src} alt={`Photo ${i + 1}`} className="rounded shadow-sm" />
        ))}
      </div>
    </div>
  );
}