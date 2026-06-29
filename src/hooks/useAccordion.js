import { useState, useCallback } from "react";

export function useAccordion(initialOpen = null) {
  const [openId, setOpenId] = useState(initialOpen);

  const toggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const expandAll = useCallback((ids) => setOpenId("all"), []);
  const collapseAll = useCallback(() => setOpenId(null), []);
  const isOpen = useCallback((id) => openId === id || openId === "all", [openId]);

  return { openId, toggle, expandAll, collapseAll, isOpen, setOpenId };
}
