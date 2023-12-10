function ResultCell({ getValue }) {
  const initialValue = getValue();

  if (initialValue === true) {
    return <span className="win">Success</span>;
  } else {
    return <span className="lose">Failure</span>;
  }
}

export default ResultCell;
