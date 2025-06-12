import { Button } from "../../components/ui/Button";

export default function WorksPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">開発実績</h1>
        <p className="mt-3 text-lg text-gray-600 sm:mt-4">
          ユニティア株式会社がこれまでに手掛けたプロジェクトの一部をご紹介します。
        </p>
      </header>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/images/works/desktopmate-screenshot.svg" 
              alt="DesktopMate スクリーンショット" 
              className="w-full aspect-video rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">インフィニットループ様 DesktopMate 受託開発</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              株式会社インフィニットループ様よりご依頼いただき、デスクトップ常駐型キャラクターアプリケーション「DesktopMate」の受託開発を担当いたしました。弊社は主にUnityを用いたキャラクター挙動、AI、UI機能などの開発に貢献し、ユーザーに愛されるインタラクティブな体験の実現に努めました。
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              本プロジェクトでは、キャラクターの自然な動きやユーザーとの対話を通じて、デスクトップ環境に新たな価値を提供することを目指しました。Unityの持つ強力な3D描画能力と柔軟なスクリプティング機能を最大限に活用し、クライアント様のビジョンを形にしました。
            </p>
            <Button asChild>
              <a href="https://www.infiniteloop.co.jp/desktopmate/" target="_blank" rel="noopener noreferrer">
                DesktopMate 公式サイトへ
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <img 
              src="/images/works/virtual-sapporo-scene.svg" 
              alt="バーチャル札幌駅JRタワー" 
              className="w-full aspect-video rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-semibold mb-4">札幌駅総合開発様 「バーチャル札幌駅ＪＲタワー さつえき.world」等制作</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              札幌駅総合開発株式会社様からのご依頼を受け、「バーチャル札幌駅ＪＲタワー さつえき.world」の制作に携わらせていただきました。このプロジェクトは、札幌の象徴的なランドマークであるJRタワーをメタバース空間に再現し、新たな観光や交流の拠点とすることを目的としています。
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              弊社は、リアリティと没入感を追求した3Dモデリング、インタラクティブなコンテンツの実装、そして多くのユーザーが快適に楽しめるような最適化を担当いたしました。さらに、世界最大級のVRイベントである「バーチャルマーケット2024 Summer」および「バーチャルマーケット2024 Winter」への出展サポートや関連コンテンツ制作も行い、札幌の魅力を国内外に発信するお手伝いをさせていただきました。
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              これらのプロジェクトを通じて、メタバース空間が持つ無限の可能性を追求し、地域社会の活性化や新たなコミュニケーションの創出に貢献できることを大変光栄に感じております。
            </p>
            {/* <Button asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                関連情報を見る (後ほどリンク追加)
              </a>
            </Button> */}
          </div>
        </div>
      </section>

    </div>
  );
}

