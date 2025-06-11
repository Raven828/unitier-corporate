import { useState } from 'react';
import { Link } from 'react-router-dom';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* ハンバーガーボタン */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-white hover:bg-gray-700 rounded-md transition-colors"
        aria-label="メニューを開く"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* 背景のオーバーレイ */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMenu}
          />

          {/* メニュー本体 */}
          <div className="fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-xl">
            <div className="p-4">
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 p-2 text-white hover:bg-gray-700 rounded-md transition-colors"
                aria-label="メニューを閉じる"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="mt-12">
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="block py-2 px-4 hover:bg-gray-700 rounded-md transition-colors"
                      onClick={closeMenu}
                    >
                      トップ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/company"
                      className="block py-2 px-4 hover:bg-gray-700 rounded-md transition-colors"
                      onClick={closeMenu}
                    >
                      会社概要
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="block py-2 px-4 hover:bg-gray-700 rounded-md transition-colors"
                      onClick={closeMenu}
                    >
                      事業内容
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/works"
                      className="block py-2 px-4 hover:bg-gray-700 rounded-md transition-colors"
                      onClick={closeMenu}
                    >
                      開発実績
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="block py-2 px-4 hover:bg-gray-700 rounded-md transition-colors"
                      onClick={closeMenu}
                    >
                      お問い合わせ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}