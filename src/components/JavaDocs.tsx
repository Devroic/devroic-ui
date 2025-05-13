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
        transition: "opacity 0.3s ease-in-out",
        backgroundColor: "white",
        zIndex: 1,
      }}
    />
  );
};

export default JavaDocs;
