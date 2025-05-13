const JavaDocs = ({ path }: { path: string }) => {
  return (
    <iframe
      src={path}
      title="HTML File"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        zIndex: 9999,
      }}
    />
  );
};

export default JavaDocs;
