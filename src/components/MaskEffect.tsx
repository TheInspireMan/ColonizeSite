"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import Link from 'next/link';
import { FaHome } from "react-icons/fa";

export default function MaskEffect() {
  return (
    <>
        <Link href="/"> <FaHome className="w-12 h-12 ml-12 mt-6"/> </Link>

        <div className="h-[40rem] w-full flex items-center justify-center overflow-hidden pt-10">
        <MaskContainer
            revealText={
            <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
                “I would like to die on Mars. Just not on impact.” <br/>
                <span className="font-bold text-xl">Elon Musk</span>
            </p>
            }
            className="h-[40rem] border rounded-md"
        >
            Want to play <span className="text-yellow-500">Colonize</span>? It is
            easy! Just click <Link href="https://play.google.com/store/apps/details?id=com.MagicUnitGames.Colonize" className="font-bold text-4xl text-green-400">Here!</Link>
            and you will able to play <span className="text-yellow-500">Colonize</span> in GooglePlay
        </MaskContainer>
        </div>
    </>
  );
}
