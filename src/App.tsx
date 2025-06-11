import { Button } from "./components/ui/Button";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MobileMenu } from "./components/MobileMenu";

// 各ページコンポーネントをインポート
import CompanyPage from './pages/company/page';
import ServicesPage from './pages/services/page';
import WorksPage from './pages/works/page';
import ContactPage from './pages/contact/page';
import PrivacyPage from './pages/privacy/page';

// HomePageコンポーネントはApp.tsx内で定義されているため、パス修正は不要
// もしHomePageも別ファイルであれば、同様にパスを修正します。
// 今回はApp.tsx内にHomePageがあるので、そのままにします。

function HomePage() {
  return (
    // <div className="flex flex-col min-h-screen"> // このdivはAppコンポーネントの全体レイアウトに含まれるため削除
    <>
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white py-20 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/images/hero/hero-bg.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-5xl font-bold mb-4 animate-fadeInUp">未来を創造するテクノロジーで、感動体験を。</h2>
            <p className="text-xl mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>札幌から世界へ、革新的なソフトウェア開発で貢献します。</p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/services">事業内容を見る</Link>
            </Button>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-12">事業内容</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg service-card">
                <img src="/images/services/pc-app-icon.svg" alt="PCアプリ開発" className="w-16 h-16 mx-auto mb-4 hover-scale" />
                <h4 className="text-xl font-semibold mb-2">PCアプリ開発</h4>
                <p className="text-gray-700 mb-4">業務効率化からエンターテイメントまで、多様なニーズに応えるPCアプリケーションを開発します。</p>
                <Button variant="outline" asChild>
                  <Link to="/services">詳しく見る</Link>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg service-card">
                <img src="/images/services/vr-ar-icon.svg" alt="VR/AR開発" className="w-16 h-16 mx-auto mb-4 hover-scale" />
                <h4 className="text-xl font-semibold mb-2">VR/AR開発</h4>
                <p className="text-gray-700 mb-4">最新のVR/AR技術を駆使し、今までにない没入感と体験価値を提供します。</p>
                <Button variant="outline" asChild>
                  <Link to="/services">詳しく見る</Link>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg service-card">
                <img src="/images/services/game-icon.svg" alt="ゲーム開発" className="w-16 h-16 mx-auto mb-4 hover-scale" />
                <h4 className="text-xl font-semibold mb-2">ゲーム開発</h4>
                <p className="text-gray-700 mb-4">Unity等のエンジンを使用し、PC・スマートフォン向けに魅力的なゲームを開発します。</p>
                <Button variant="outline" asChild>
                  <Link to="/services">詳しく見る</Link>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg service-card">
                <img src="/images/services/metaverse-icon.svg" alt="メタバースワールド制作" className="w-16 h-16 mx-auto mb-4 hover-scale" />
                <h4 className="text-xl font-semibold mb-2">メタバースワールド制作</h4>
                <p className="text-gray-700 mb-4">独自のメタバース空間を構築し、新たなコミュニケーションとビジネスの可能性を拓きます。</p>
                <Button variant="outline" asChild>
                  <Link to="/services">詳しく見る</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
    // </div> // このdivはAppコンポーネントの全体レイアウトに含まれるため削除
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4 sticky top-0 z-40">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/company/unitier-logo.svg" alt="ユニティア株式会社" className="h-10" />
            </Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-gray-300">トップ</Link></li>
                <li><Link to="/company" className="hover:text-gray-300">会社概要</Link></li>
                <li><Link to="/services" className="hover:text-gray-300">事業内容</Link></li>
                <li><Link to="/works" className="hover:text-gray-300">開発実績</Link></li>
                <li><Link to="/contact" className="hover:text-gray-300">お問い合わせ</Link></li>
              </ul>
            </nav>
            <MobileMenu />
          </div>
        </header>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-8 mt-auto">
          <div className="container mx-auto">
            <div className="text-center mb-4">
              <p>&copy; 2025 ユニティア株式会社. All rights reserved.</p>
              <p>北海道札幌市北区北十三条西4丁目1番2第一志水ビル4階</p>
            </div>
            <div className="text-center text-sm">
              <Link to="/privacy" className="hover:text-gray-300 underline">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

