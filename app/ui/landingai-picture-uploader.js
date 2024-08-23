"use client";

import {
  InferenceContext,
  InferenceResult,
  PhotoCollector,
} from "landingai-react";
import { useState } from "react";

/**
 * @danger
 * This key is for demonstration purposes only.
 * For the production app, you should never expose your API key.
 */
const API_INFO = {
  endpoint: `https://predict.app.landing.ai/inference/v1/predict?endpoint_id=${process.env.NEXT_PUBLIC_HERO_LENS_ENDPOINT_ID}`,
  key: process.env.NEXT_PUBLIC_HERO_LENS_ENDPOINT_KEY,
};

export function LandingaiPictureUploader() {
  const [image, setImage] = useState();
  const [showLabels, setLabels] = useState(false);
  return (
    <InferenceContext.Provider value={API_INFO}>
      <div className="landing-ai-component-container">
        <label htmlFor="customer" className="mb-2 block text-sm font-medium">
          Upload an hero
        </label>
        <PhotoCollector setImage={setImage} />
        <InferenceResult
          image={image}
          onPredictError={(err) => {
            console.error(err);
          }}
          showLabels={showLabels}
        />
      </div>
    </InferenceContext.Provider>
  );
}
