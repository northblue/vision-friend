"use client";

import { useEffect, useState } from "react";

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
}

export default function HomePage() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vision Friend Gallery 🎨</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.public_id} className="rounded-lg overflow-hidden shadow">
            <img
              src={img.secure_url}
              alt={img.public_id}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}