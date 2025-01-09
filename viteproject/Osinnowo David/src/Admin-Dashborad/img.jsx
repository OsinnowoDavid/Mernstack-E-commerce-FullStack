import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";

// import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { AdvancedImage } from "@cloudinary/react";

// import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";
// import { scale } from "@cloudinary/url-gen/actions/resize";
import { focusOn, } from "@cloudinary/url-gen/qualifiers/gravity";


import { face } from "@cloudinary/url-gen/qualifiers/focusOn";
const Img = ({ uploadedimage }) => {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dr9krsdz4",
    },
  });

  const myImage = cld.image(uploadedimage);

  myImage.resize(thumbnail().width(150).height(150).gravity(focusOn(face())));
  return (
    <div>
    <AdvancedImage cldImg={myImage} />
  </div>
  );
};

export default Img;
