import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-950 text-gray-300 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col">
          <div>
            <span>Home</span> | <span>Terms & Conditions</span> |{" "}
            <span>Privacy Policy</span> | <span>Collection Statement</span> |{" "}
            <span>Help</span> | <span>Manage Account</span>
          </div>
          <div>
            <p>Copyright © 2022 DEMO Streaming ALl Rights Reserved</p>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex gap-4">
            <img
              src={"../src/assets/social/facebook-white.svg"}
              className="w-4"
            />
            <img
              src={"../src/assets/social/twitter-white.svg"}
              className="w-4"
            />
            <img
              src={"../src/assets/social/instagram-white.svg"}
              className="w-4"
            />
          </div>
          <div className="flex gap-4">
            <img src={"../src/assets/store/app-store.svg"} className="w-24" />
            <img src={"../src/assets/store/play-store.svg"} className="w-24" />
            <img
              src={"../src/assets/store/windows-store.svg"}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
