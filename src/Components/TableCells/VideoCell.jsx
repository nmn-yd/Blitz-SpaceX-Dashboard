function ImageCell({ getValue }) {
  const initialValue = getValue();
  return (
    <a href={initialValue} target="_blank" rel="noopener noreferrer">
      <img
        src="icons8-youtube-48.png"
        alt="Mission Patch"
        style={{ maxWidth: "35px", maxHeight: "35px" }}
      />
    </a>
  );
}

export default ImageCell;
