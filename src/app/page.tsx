import Render3D from "@/components/Render3D";
import ThemeSwitcher from "@/components/themeSwitcher";
import { ThreeD } from "@/types/ThreeD";

export default function Home() {
  return (
    <>
      <div className="min-h-[100dvh] flex flex-col">
        <header className="">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between py-16">
              <h1 className="text-5xl text-primary">龍</h1>
              <nav className="items-center space-x-6 z-10 hidden md:flex">
                <a href="/home" className="border-b border-b-primary">ホーム</a>
                <a href="/about">私について</a>
                <a href="/portfolio">ポートフォリオ</a>
                <a href="/services">サービス</a>
                <a href="/contact">連絡先</a>
                <ThemeSwitcher />
              </nav>
            </div>
          </div>
        </header>
        <div className="flex-1 container px-4 mx-auto flex justify-end items-stretch relative">
          <div className="fixed inset-0 md:-left-1/3">
            <Render3D scene={ThreeD.OCARINA} />
          </div>
          <span className="[writing-mode:vertical-rl] md:text-5xl text-center">技術によって、<br className="hidden md:block" />夢は現実に変わる。</span>
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex flex-col py-16">
              <h2 className="text-2xl z-10">クラッシュユニックス</h2>
              <span className="text-primary z-10 font-bold">ソフトウェア開発者</span>
            </div>
            <div className="flex items-center space-x-6 z-10">
              <a target="_blank" href="https://github.com/crashunix">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a target="_blank" href="https://www.behance.net/crashunix">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
