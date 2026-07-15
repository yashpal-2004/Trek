import { useState, useEffect, useCallback, useRef } from "react";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";

export function useFirestore(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);
  const storedValueRef = useRef(storedValue);

  // Keep ref updated to prevent stale closures
  useEffect(() => {
    storedValueRef.current = storedValue;
  }, [storedValue]);

  // 1. Fetch initial value and listen to updates from Firestore
  useEffect(() => {
    const docRef = doc(db, "trek_app_data", key);
    
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setStoredValue(docSnap.data().data);
      } else {
        setStoredValue(initialValue);
      }
    }, (error) => {
      console.error(`Error loading key "${key}" from Firestore:`, error);
    });

    return () => unsubscribe();
  }, [key, initialValue]);

  // 2. Set value to Firestore
  const setValue = useCallback(
    async (value) => {
      try {
        const docRef = doc(db, "trek_app_data", key);
        const valueToStore = value instanceof Function ? value(storedValueRef.current) : value;
        setStoredValue(valueToStore);
        await setDoc(docRef, { data: valueToStore });
      } catch (error) {
        console.error(`Error saving to Firestore key "${key}":`, error);
      }
    },
    [key]
  );

  return [storedValue, setValue];
}
