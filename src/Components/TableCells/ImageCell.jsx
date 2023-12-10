import { useState, useEffect } from "react";

function ImageCell({ getValue }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    let active = true;
    const loadValue = async () => {
      try {
        const initialValue = await getValue();
        const img = new Image();
        img.src = initialValue;

        img.onload = () => {
          if (active) {
            setSrc(initialValue);
          }
        };
      } catch (error) {
        console.error("Error loading image", error);
      }
    };

    loadValue();

    return () => {
      active = false;
    };
  }, [getValue]);

  return src ? (
    <img
      src={src}
      alt="Mission Patch"
      style={{ maxWidth: "45px", maxHeight: "45px" }}
    />
  ) : (
    <div>Loading...</div>
  );
}

export default ImageCell;
