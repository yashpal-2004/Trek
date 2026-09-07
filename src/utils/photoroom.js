// Photoroom Background Removal API Integration
// Live key (10 free clean cutouts) + Sandbox key (1000 free test cutouts with watermarks)
const PHOTOROOM_LIVE_KEY = "sk_pr_default_b58dd402fafaa6ca887f331bf914c061f67b3513";
const PHOTOROOM_SANDBOX_KEY = "sandbox_sk_pr_default_b58dd402fafaa6ca887f331bf914c061f67b3513";

export const removeBackgroundPhotoroom = async (fileOrBase64, forceSandbox = false) => {
  const tryKey = async (apiKey) => {
    try {
      const formData = new FormData();
      if (typeof fileOrBase64 === "string" && (fileOrBase64.startsWith("data:") || fileOrBase64.startsWith("http://") || fileOrBase64.startsWith("https://"))) {
        const response = await fetch(fileOrBase64);
        const blob = await response.blob();
        formData.append("image_file", blob, "garment.jpg");
      } else if (fileOrBase64 instanceof File || fileOrBase64 instanceof Blob) {
        formData.append("image_file", fileOrBase64);
      } else {
        console.warn("Invalid input format for Photoroom API:", typeof fileOrBase64);
        return null;
      }

      const res = await fetch("https://sdk.photoroom.com/v1/segment", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
        },
        body: formData,
      });

      if (res.ok) {
        const blob = await res.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
      } else {
        const errText = await res.text();
        console.warn(`Photoroom key [${apiKey.slice(0, 10)}...] failed with status ${res.status}:`, errText);
      }
    } catch (err) {
      console.warn("Error during Photoroom key attempt:", err);
    }
    return null;
  };

  try {
    if (!forceSandbox) {
      const resultLive = await tryKey(PHOTOROOM_LIVE_KEY);
      if (resultLive) return resultLive;
      console.info("Live Photoroom key returned error or quota exhausted. Trying Sandbox key...");
    }
    const resultSandbox = await tryKey(PHOTOROOM_SANDBOX_KEY);
    if (resultSandbox) return resultSandbox;
  } catch (err) {
    console.warn("Photoroom API background removal error:", err);
  }
  return null;
};
