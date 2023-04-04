import React from "react";
import { useRouter } from "next/router";

import ArrowDown from "@/components/icons/ArrowDown.svg";
import ArrowUp from "@/components/icons/ArrowUp.svg";
import ArrowLeft from "@/components/icons/ArrowLeft.svg";
import ArrowRight from "@/components/icons/ArrowRight.svg";
import KeyP from "@/components/icons/KeyP.svg";
import KeyQ from "@/components/icons/KeyQ.svg";
import KeySpace from "@/components/icons/KeySpace.svg";
import Image from "next/image";
import ControlsSvg from "@/components/icons/Controls.png";

const ControlsPage = () => {
  const router = useRouter();
  return (
    <div className="controls-page">
      <h1>
        <button onClick={() => router.push("/tetris")}>
          <span>&larr;</span>
        </button>
        <span>Customize controls</span>
      </h1>
      <div className="controls-content">
        <p>
          Rotate <span>[ &uarr; ]</span>
        </p>
        <p>
          Move Left <span>[ &larr; ]</span>
        </p>
        <p>
          Move Right <span>[ &rarr; ]</span>
        </p>
        <p>
          Slow Drop <span>[ &darr; ]</span>
        </p>
        <p>
          Hard Drop <span>[ Space ]</span>
        </p>
        <p>
          Other <span>[ P ]</span>
        </p>
        <p>
          Quit <span>[ Q ]</span>
        </p>
      </div>
    </div>
  );
};

export default ControlsPage;
