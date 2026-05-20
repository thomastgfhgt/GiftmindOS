import dynamic from "next/dynamic";
const GiftMindOS = dynamic(() => import("../components/GiftMindOS"), { ssr: false });
export default function Home() { return <GiftMindOS />; }
