export const uploadToCloudinary = async (fileOrBase64) => {
  const CLOUD_NAME = "hboe34p5";
  const UPLOAD_PRESET = "trek_preset";

  try {
    const formData = new FormData();
    formData.append("file", fileOrBase64);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      return data.secure_url;
    } else {
      const errData = await res.json();
      console.warn("Cloudinary upload rejected:", errData);
    }
  } catch (err) {
    console.warn("Cloudinary upload failed, falling back to local storage:", err);
  }
  return null;
};

// Cloudinary AI Background Removal Transformation URL generator
export const removeBackgroundCloudinary = async (fileOrBase64) => {
  try {
    // 1. Upload original image to Cloudinary
    const uploadedUrl = await uploadToCloudinary(fileOrBase64);
    if (!uploadedUrl) return null;

    // 2. Inject Cloudinary background removal transformation (e_background_removal)
    // Example: https://res.cloudinary.com/hboe34p5/image/upload/e_background_removal/v12345/garment.png
    const transparentUrl = uploadedUrl.replace("/upload/", "/upload/e_background_removal/");
    return transparentUrl;
  } catch (err) {
    console.warn("Cloudinary AI background removal failed:", err);
    return null;
  }
};
