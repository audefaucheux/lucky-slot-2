import Link from "next/link";
import Header from "../components/Header";
import GameScreen from "../components/GameScreen";

const SlotMachineApp = () => {
  return (
    <div>
      <Header />
      <GameScreen />
      <Link href="/login">
        <a>Login page</a>
      </Link>
    </div>
  );
};

export default SlotMachineApp;
