import { useState } from "react";

const Image = ({ url }: { url: string }) => {
  const [imageURL, setImageURL] = useState<string>(url);
  return (
    <img
      src={imageURL}
      onError={(e: any) => {
        e.target.onerror = null;
        setImageURL("/image/placeholder.jpg");
      }}
    />
  );
};

export default Image;
