"use client";

import UploadForm from "@/component/UploadForm";
import { useState } from "react";

export default function Classification() {
  const [result, setResult] = useState(null);

  const mockAIResponse = () => {
    const diseases = ["Skin Rash", "Eczema", "Psoriasis", "Acne"];
    const suggestions = [
      "Drink plenty of water.",
      "Avoid oily foods.",
      "Apply prescribed creams.",
      "Consult a dermatologist.",
    ];
    return {
      disease: diseases[Math.floor(Math.random() * diseases.length)],
      suggestion: suggestions[Math.floor(Math.random() * suggestions.length)],
    };
  };

  const handleImageUpload = (file) => {
    // Simulate AI detection
    const aiResult = mockAIResponse();
    setResult(aiResult);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        AI Disease Detector
      </h1>
      <p className="text-gray-600 mb-6">
        Upload an image to detect possible diseases and get suggestions.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <UploadForm onUpload={handleImageUpload} />
        {result && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Detection Result:
            </h2>
            <p className="mt-2 text-gray-700">
              <strong>Disease:</strong> {result.disease}
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Suggestion:</strong> {result.suggestion}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
