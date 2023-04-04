import Game from "@/components/Game";
import Image from "next/image";
import { useRouter } from "next/router";
import img from "../assets/img/landing-bg.jpeg";

export default function Home() {
  const router = useRouter();
  return (
    <div className="landing">
      <h1 className="landing-title">
        <span>T</span>
        <span>E</span>
        <span>T</span>
        <span>R</span>
        <span>I</span>
        <span>S</span>
      </h1>
      <button className="landing-button" onClick={() => router.push("/tetris")}>
        Play now
      </button>
    </div>
  );
}
