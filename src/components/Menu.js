import { useRouter } from "next/router";

const Menu = ({ onClick }) => {
  const router = useRouter();
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Start Game
      </button>
      <button
        className="Button-outlined"
        onClick={() => router.push("/tetris/controls")}
      >
        Controls
      </button>
      <button className="Button-outlined" onClick={() => router.push("/")}>
        Exit
      </button>
    </div>
  );
};

export default Menu;
