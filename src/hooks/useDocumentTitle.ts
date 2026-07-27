import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Devroic`;
  }, [title]);
};

export default useDocumentTitle;
