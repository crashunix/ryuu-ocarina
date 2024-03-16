import Ocarina3D from "@/components/Ocarina3D";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-16">
            <h1 className="text-5xl text-nihon-red">龍</h1>
            <nav className="flex items-center space-x-6">
              <a href="/home" className="border-b border-b-nihon-red">ホーム</a>
              <a href="/about">私について</a>
              <a href="/portfolio">ポートフォリオ</a>
              <a href="/services">サービス</a>
              <a href="/contact">お問い合わせ</a>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex-1 container mx-auto flex justify-end items-stretch relative">
        <div className="fixed inset-0 -top-[10%] -left-1/3">
          <Ocarina3D />
        </div>
        <span className="[writing-mode:vertical-rl] text-5xl text-center">技術によって、夢<br />は現実に変わる。</span>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col py-16">
          <h2 className="text-white text-2xl">クラッシュユニックス</h2>
          <span className="text-nihon-red">ソフトウェア開発者</span>
        </div>
      </div>
    </div>
  );
}
