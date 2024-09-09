"use client";

import { LandingaiPictureUploader } from "@/app/ui/landingai-picture-uploader";

export default function Form() {
  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      {/* File Upload*/}
      <LandingaiPictureUploader />
    </div>
  );
}
