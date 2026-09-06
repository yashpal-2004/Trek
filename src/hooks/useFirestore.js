import { useState, useEffect, useCallback, useRef } from "react";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";

export function useFirestore(key, initialValue) {
  // Try loading from localStorage first as instant fallback
  const getLocalData = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getLocalData);
  const [isLoading, setIsLoading] = useState(true);
  const storedValueRef = useRef(storedValue);

  // Keep ref updated to prevent stale closures
  useEffect(() => {
    storedValueRef.current = storedValue;
  }, [storedValue]);

  const initialValueRef = useRef(initialValue);
  useEffect(() => {
    initialValueRef.current = initialValue;
  }, [initialValue]);

  const isSavingRef = useRef(false);

  // 1. Fetch initial value and listen to updates from Firestore
  useEffect(() => {
    const docRef = doc(db, "trek_app_data", key);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (isSavingRef.current) return;
      if (docSnap.exists()) {
        const value = docSnap.data().data;
        setStoredValue(value);
        storedValueRef.current = value;
        try { window.localStorage.setItem(key, JSON.stringify(value)); } catch (_) {}
      }
      setIsLoading(false);
    }, (error) => {
      console.warn(`Firestore snapshot error for key "${key}", using local cache:`, error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [key]);

  // 2. Set value to Firestore with localStorage fallback
  const setValue = useCallback(
    async (value) => {
      try {
        isSavingRef.current = true;
        const valueToStore = value instanceof Function ? value(storedValueRef.current) : value;
        setStoredValue(valueToStore);
        storedValueRef.current = valueToStore;
        
        // Save locally first
        try {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (e) {
          console.warn("LocalStorage save error:", e);
        }

        // Save to cloud Firestore
        const docRef = doc(db, "trek_app_data", key);
        await setDoc(docRef, { data: valueToStore });
      } catch (error) {
        console.warn(`Cloud Firestore limit hit for key "${key}". Item saved locally in browser cache.`, error);
      } finally {
        isSavingRef.current = false;
      }
    },
    [key]
  );

  return [storedValue, setValue, isLoading];
}

