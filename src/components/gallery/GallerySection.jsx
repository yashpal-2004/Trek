import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { gallery, galleryCategories } from "../../data/gallery";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";

export default function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white scroll-mt-20">
      <Container>
        <SectionTitle label="Memories" title="Photo Gallery" description="Stunning destinations awaiting your lens." />

        <div className="flex flex-wrap gap-2 mb-8">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat ? "bg-primary text-white" : "bg-gray-100 text-secondary hover:bg-gray-200"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="break-inside-avoid group relative rounded-[18px] overflow-hidden cursor-pointer"
              onClick={() => setLightbox(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-white/70">{item.location}</p>
                </div>
                <ZoomIn size={24} className="absolute top-4 right-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-white p-2" aria-label="Close"><X size={28} /></button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox.image.replace("w=600", "w=1200")}
              alt={lightbox.title}
              className="max-w-full max-h-[85vh] object-contain rounded-[18px]"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <p className="font-semibold text-lg">{lightbox.title}</p>
              <p className="text-sm text-white/70">{lightbox.description} · {lightbox.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
