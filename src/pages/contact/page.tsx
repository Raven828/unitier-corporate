export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">お問い合わせ</h1>
        <p className="mt-3 text-lg text-gray-600 sm:mt-4">
          お気軽にお問い合わせください
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 連絡先情報 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">連絡先情報</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">会社名</h3>
                  <p className="text-gray-700">ユニティア株式会社</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">所在地</h3>
                  <p className="text-gray-700">
                    〒001-0013<br />
                    北海道札幌市北区北十三条西4丁目1番2第一志水ビル4階
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">メールアドレス</h3>
                  <p className="text-gray-700">
                    <a href="mailto:info@unitier.net" className="text-blue-600 hover:text-blue-800">
                      info@unitier.net
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <div>
            <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form
                action="mailto:info@unitier.net"
                method="get"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    会社名・お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="株式会社○○ 山田太郎"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="cc"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="example@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="011-123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="body"
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="開発のご相談、お見積もり、その他ご質問等をご記入ください。"
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
                  >
                    メールソフトを起動してお問い合わせ
                  </button>
                </div>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  ※ お使いのメールソフトが起動します。内容をご確認の上、送信してください。<br />
                  ※ メールソフトが起動しない場合は、直接 <a href="mailto:info@unitier.net" className="text-blue-600 hover:text-blue-800 underline">info@unitier.net</a> までご連絡ください。
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">お問い合わせについて</h3>
            <p className="text-gray-700">
              開発のご相談、お見積もり、その他ご質問等がございましたら、
              お気軽にお問い合わせください。迅速に対応させていただきます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}