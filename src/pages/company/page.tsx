export default function CompanyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">会社概要</h1>
        <p className="mt-3 text-lg text-gray-600 sm:mt-4">
          ユニティア株式会社について
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">会社名</h2>
                <p className="text-gray-700">ユニティア株式会社</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">代表者</h2>
                <p className="text-gray-700">代表取締役　小川　雅人</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">設立</h2>
                <p className="text-gray-700">2021年4月1日</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">資本金</h2>
                <p className="text-gray-700">1,000万円</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">従業員数</h2>
                <p className="text-gray-700">10名（2025年1月現在）</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">所在地</h2>
                <p className="text-gray-700">
                  〒001-0013<br />
                  北海道札幌市北区北十三条西4丁目1番2第一志水ビル4階
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">連絡先</h2>
                <p className="text-gray-700">
                  TEL: 011-XXX-XXXX<br />
                  FAX: 011-XXX-XXXX<br />
                  Email: <a href="mailto:info@unitier.net" className="text-blue-600 hover:text-blue-800">info@unitier.net</a>
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">事業内容</h2>
                <ul className="text-gray-700 space-y-1">
                  <li>• PCアプリケーション開発</li>
                  <li>• VR/AR開発</li>
                  <li>• ゲーム開発</li>
                  <li>• メタバースワールド制作</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">企業理念</h2>
                <p className="text-gray-700">
                  最新のテクノロジーを駆使し、革新的なソフトウェア開発を通じて、
                  人々に感動的な体験を提供し、社会の発展に貢献します。
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">アクセス</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.2808168894925!2d141.34593431584806!3d43.07589857914456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2974d2c3f903%3A0x9b77e3e1e8e8e8e8!2z5YyX5rW36YGT5pyt5bmM5biC5YyX5Yy65YyX5Y2B5LiJ5p2h6KW_77yU5LiB55uu77yR4oiS77yS!5e0!3m2!1sja!2sjp!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="ユニティア株式会社 所在地"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-700">北海道札幌市北区北十三条西4丁目1番2第一志水ビル4階</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=北海道札幌市北区北十三条西4丁目1番2第一志水ビル4階"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:text-blue-800 underline"
            >
              Google Mapで開く
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}