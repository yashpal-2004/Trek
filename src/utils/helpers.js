import clsx from "clsx";

export { clsx };

export const cn = (...classes) => clsx(...classes);

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

export const downloadJSON = (data, filename) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

export const filterBySearch = (items, query, keys) => {
  if (!query.trim()) return items;
  const q = query.toLowerCase();
  return items.filter((item) =>
    keys.some((key) => {
      const val = item[key];
      return val && String(val).toLowerCase().includes(q);
    })
  );
};

export const getIconByName = (icons, name) => icons[name] || icons.MapPin;
