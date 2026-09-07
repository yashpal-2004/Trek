import { removeBackground } from "@imgly/background-removal";

export const removeBackgroundClientSide = async (fileOrBase64OrUrl) => {
  try {
    let source = fileOrBase64OrUrl;
    
    // If remote URL, fetch blob first
    if (typeof source === "string" && (source.startsWith("http://") || source.startsWith("https://"))) {
      const res = await fetch(source);
      source = await res.blob();
    }

    const blob = await removeBackground(source, {
      progress: (key, current, total) => {
        console.log(`Client AI Progress [${key}]: ${current}/${total}`);
      }
    });

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.warn("Client-side AI background removal error:", err);
    return null;
  }
};
