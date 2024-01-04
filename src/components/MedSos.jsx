import React from "react";
import { Card, Badge } from "flowbite-react";

import {
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsWordpress,
} from "react-icons/bs";
const MediaSosialComponent = () => {
  return (
    <Card className="max-w-screen-sm md:mx-auto my-12 shadow-2xl mx-6">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-center ">
        <div>
          <h5 className="mb-3 text-xl text-center font-medium text-gray-900 dark:text-white">
            Akun Resmi Yudha
          </h5>
          <img
            src="logoyudha.png"
            alt=""
            className="mb-3 rounded-full shadow-lg w-2/5 mx-auto"
          />

          <div className=" flex flex-wrap text-md text-gray-500 dark:text-gray-400">
            <Badge icon={BsInstagram} size="xl" color="white" />
            <Badge icon={BsGithub} size="xl" color="white" />
            <Badge icon={BsTwitter} size="xl" color="white" />
            <Badge icon={BsLinkedin} size="xl" color="white" />
            <Badge icon={BsWordpress} size="xl" color="white" />
          </div>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/I4lLpsiJz7U?si=pbfbsZaxAyrRdxUQ"
            title="YouTube video player"
            className="rounded-xl w-full h-52"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </Card>
  );
};
export default MediaSosialComponent;
