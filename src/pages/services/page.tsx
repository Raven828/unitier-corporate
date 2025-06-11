export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">事業内容</h1>
        <p className="mt-3 text-lg text-gray-600 sm:mt-4">
          ユニティア株式会社が提供するサービス
        </p>
      </header>

      <div className="space-y-16">
        {/* PCアプリ開発 */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">PCアプリケーション開発</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">概要</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                業務効率化からエンターテイメントまで、多様なニーズに応えるPCアプリケーションを開発します。
                Windows、macOS、Linuxに対応し、.NET、C++、Electronなど幅広い技術スタックに対応しています。
              </p>
              <p className="text-gray-700 leading-relaxed">
                企画段階からデプロイメント、保守運用まで、一貫したサポートを提供いたします。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">技術的強み</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 高性能なネイティブアプリケーション開発</li>
                <li>• クロスプラットフォーム対応</li>
                <li>• 直感的なUI/UXデザイン</li>
                <li>• 高度なセキュリティ実装</li>
                <li>• 大規模データ処理対応</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VR/AR開発 */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-green-600">VR/AR開発</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">概要</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                最新のVR（仮想現実）、AR（拡張現実）技術を用いて、没入感の高いコンテンツを制作します。
                Meta Quest、HoloLens、ARKit/ARCoreなど主要プラットフォームに対応しています。
              </p>
              <p className="text-gray-700 leading-relaxed">
                教育、医療、エンターテイメント、産業分野での活用事例を多数手掛けています。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">技術的強み</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• リアルタイム3Dレンダリング最適化</li>
                <li>• 自然なインタラクション設計</li>
                <li>• 空間認識・トラッキング技術</li>
                <li>• マルチプラットフォーム対応</li>
                <li>• パフォーマンス最適化</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ゲーム開発 */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">ゲーム開発</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">概要</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unity、Unreal Engineなどの主要ゲームエンジンを使用し、
                PC、スマートフォン、コンシューマー機向けのゲームを開発します。
              </p>
              <p className="text-gray-700 leading-relaxed">
                企画からリリース、運用まで、ゲーム開発の全工程をサポートいたします。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">技術的強み</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 魅力的なゲームプレイ設計</li>
                <li>• 高品質な3Dグラフィックス</li>
                <li>• マルチプレイヤー対応</li>
                <li>• プラットフォーム最適化</li>
                <li>• 継続的なアップデート対応</li>
              </ul>
            </div>
          </div>
        </section>

        {/* メタバース */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-red-600">メタバースワールド制作</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">概要</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                企業や個人のニーズに合わせた独自のメタバース空間を企画・設計・構築します。
                VRChat、cluster、独自プラットフォームでの展開が可能です。
              </p>
              <p className="text-gray-700 leading-relaxed">
                イベント開催、コミュニティ運営、経済活動の仕組みづくりまで総合的にサポートします。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">技術的強み</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 独創的な世界観の創造</li>
                <li>• 大規模ユーザー対応</li>
                <li>• リアルタイム通信システム</li>
                <li>• 経済システム実装</li>
                <li>• プラットフォーム連携</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}