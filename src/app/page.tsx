import Ocarina3D from "@/components/Ocarina3D";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between py-16">
            <h1 className="text-5xl text-nihon-red">龍</h1>
            <nav className="items-center space-x-6 z-10 hidden md:flex">
              <a href="/home" className="border-b border-b-nihon-red">ホーム</a>
              <a href="/about">私について</a>
              <a href="/portfolio">ポートフォリオ</a>
              <a href="/services">サービス</a>
              <a href="/contact">連絡先</a>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex-1 container px-4 mx-auto flex justify-end items-stretch relative">
        <div className="fixed inset-0 md:-left-1/3">
          <Ocarina3D />
        </div>
        <span className="[writing-mode:vertical-rl] md:text-5xl text-center">技術によって、夢<br className="hidden md:block" />は現実に変わる。</span>
      </div>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col py-16">
          <h2 className="text-white text-2xl z-10">クラッシュユニックス</h2>
          <span className="text-nihon-red z-10">ソフトウェア開発者</span>
        </div>
      </div>
    </div>
  );
}
