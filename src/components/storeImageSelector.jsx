import { CameraIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function StoreImageSelector() {
  const [userImage, setUserImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!userImage) return;
    const objectUrl = URL.createObjectURL(userImage);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [userImage]);

  function validateImage(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const { width, height } = img;
        const sizeInMB = file.size / (1024 * 1024);

        // Validate dimensions and size
        if (width < 600 || width > 800) {
          reject("Width must be between 600px and 800px.");
        } else if (height < 450 || height > 600) {
          reject("Height must be between 450px and 600px.");
        } else if (sizeInMB > 2) {
          reject("File size must be less than 2MB.");
        } else {
          resolve(file);
        }
      };
      img.onerror = () => reject("Invalid image file.");
      img.src = URL.createObjectURL(file);
    });
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];

    if (file) {
      validateImage(file)
        .then((validFile) => {
          setUserImage(validFile);
          setError(null);
        })
        .catch((err) => {
          setError(err);
          setUserImage(null);
          setPreview(null);
        });
    }
  }

  function removeImage() {
    setUserImage(null);
    setPreview(null);
    setError(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function triggerFileInput() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  return (
    <div className="max-w-44 md:max-w-60 w-full relative items-center justify-center aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md">
      {preview ? (
        <img
          src={preview}
          className="h-full rounded-md w-full object-cover"
          alt="User uploaded"
        />
      ) : (
        <p className="text-center text-gray-600 p-4">Upload your image here</p>
      )}

      <div
        onClick={triggerFileInput}
        className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 size-16 bg-primary-red p-1 flex items-center justify-center rounded-full cursor-pointer"
      >
        <CameraIcon className="text-white" size={36} />
      </div>

      {userImage && (
        <div
          onClick={removeImage}
          className="bg-gray-50 -translate-y-1/2 translate-x-1/2 absolute top-0 right-0 p-1.5 cursor-pointer z-10 border rounded-full"
        >
          <X size={16} />
        </div>
      )}

      {error && (
        <p className="text-red-500 text-xs absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2">
          {error}
        </p>
      )}

      <input
        ref={fileInputRef}
        onChange={handleImageUpload}
        type="file"
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}

export default StoreImageSelector;
