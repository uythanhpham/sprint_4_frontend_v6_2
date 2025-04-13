'use client';

import { useState } from 'react';
import { ImageUp } from 'lucide-react';
import './BodyUpload.css'


export default function BodyUpload() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputId = 'body-upload-input';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      console.log('✔ Ảnh đã chọn:', file.name);
    }

    e.target.value = '';
  };

  return (
    <div className="rectangle-body" id="body-box">
      <div className="body-inner">
        <label
          htmlFor={inputId}
          className="w-full h-full flex justify-center items-center cursor-pointer"
        >
          {previewUrl ? (
            <div className="preview-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewUrl}
                alt="Uploaded body"
                className="object-contain w-full h-full"
              />
            </div>
          ) : (
            <span style={{ fontSize: 28, color: 'deeppink', display: 'flex', alignItems: 'center', gap: 8 }}>
              <ImageUp size={28} color="deeppink" />
              Body
            </span>)}

        </label>

        <input
          id={inputId}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
