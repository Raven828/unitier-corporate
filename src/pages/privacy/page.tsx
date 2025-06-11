export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">プライバシーポリシー</h1>
        <p className="mt-3 text-lg text-gray-600 sm:mt-4">
          個人情報の取り扱いについて
        </p>
      </header>

      <div className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. 基本方針</h2>
            <p className="text-gray-700 leading-relaxed">
              ユニティア株式会社（以下「当社」といいます）は、お客様の個人情報の重要性を認識し、
              個人情報の保護に関する法律および関連法令を遵守するとともに、
              以下のプライバシーポリシーに基づき、お客様の個人情報を適切に取り扱います。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. 個人情報の定義</h2>
            <p className="text-gray-700 leading-relaxed">
              本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報、
              すなわち生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
              特定の個人を識別することができるもの（他の情報と容易に照合することができ、
              それにより特定の個人を識別することができることとなるものを含みます）を指します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. 個人情報の収集</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、以下の場合に個人情報を収集することがあります：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>お問い合わせフォームからのご連絡時</li>
              <li>サービスのお申し込み時</li>
              <li>採用応募時</li>
              <li>その他、お客様から直接個人情報をご提供いただく場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. 個人情報の利用目的</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、収集した個人情報を以下の目的で利用いたします：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>お問い合わせへの対応</li>
              <li>サービスの提供および改善</li>
              <li>契約の履行</li>
              <li>採用選考活動</li>
              <li>法令に基づく対応</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. 個人情報の第三者提供</h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. 個人情報の安全管理</h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために、
              必要かつ適切な措置を講じます。また、個人情報を取り扱う従業員に対して、
              適切な監督を行います。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. 個人情報の開示・訂正・削除</h2>
            <p className="text-gray-700 leading-relaxed">
              お客様は、当社が保有するお客様の個人情報について、開示、訂正、削除を請求する権利を有しています。
              これらの請求を行う場合は、下記のお問い合わせ先までご連絡ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. プライバシーポリシーの変更</h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。
              変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. お問い合わせ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              個人情報の取り扱いに関するお問い合わせは、以下の連絡先までお願いいたします。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                ユニティア株式会社<br />
                〒001-0013<br />
                北海道札幌市北区北十三条西4丁目1番2第一志水ビル4階<br />
                Email: <a href="mailto:info@unitier.net" className="text-blue-600 hover:text-blue-800">info@unitier.net</a>
              </p>
            </div>
          </section>

          <section>
            <p className="text-gray-600 text-right">
              制定日：2021年4月1日<br />
              最終更新日：2025年1月6日
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}