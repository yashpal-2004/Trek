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
