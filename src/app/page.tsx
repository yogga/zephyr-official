import Image from 'next/image';
import { Button } from './components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden">
      {/* Background Image with Overlay */}
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />
      {/* <div className="absolute inset-0 bg-[#FDF4F0]/40 backdrop-blur-[2px]" /> */}

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md space-y-8 transition-all duration-300 hover:shadow-xl">
          {/* Logo and Header */}
          <div className="text-center space-y-4">
            <div className="relative w-[200px] h-[100px] mx-auto">
              <Image
                src="/logo-zephyr.png"
                alt="Zephyr Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-xl font-serif text-gray-600"></h2>
            <p className="text-lg text-gray-600 font-light">Happy Shopping :)</p>
          </div>

          {/* Buttons Container */}
          <div className="space-y-3">
            <Button 
              className="w-full bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300 py-6 text-lg font-medium shadow-lg hover:shadow-pink-200 mb-4"
            >
              OFFICIAL WEBSITE (soon)
            </Button>

            <a href="https://www.instagram.com/zephyr.idofficial/" target="_blank" rel="noopener noreferrer">
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 py-6 text-lg font-medium shadow-lg hover:shadow-purple-200 mb-4"
              >
                <Image
                  src="/instagram-new.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="mr-3"
                />
                 Zephyr Official
              </Button>
            </a>

            <a href="https://wa.me/+6282334132922?text=halo%20apakah%20parfum%20ada%20?" target="_blank" rel="noopener noreferrer">
              <Button 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white transition-all duration-300 py-6 text-lg font-medium shadow-lg hover:shadow-emerald-200 mb-4"
              >
                <Image
                  src="/wa.svg"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  className="mr-3"
                />
                Zephyr Official
              </Button>
            </a>

            <a href="https://id.tokopedia.com/zephyrofficial" target="_blank" rel="noopener noreferrer">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 py-6 text-lg font-medium shadow-lg hover:shadow-green-200 mb-4"
              >
                <Image
                  src="/tokopedia-logo.svg"
                  alt="Tokopedia"
                  width={28}
                  height={28}
                  className="mr-3"
                />
                 Zephyr Official
              </Button>
            </a>

            <a href="https://id.shp.ee/hmykZZf" target="_blank" rel="noopener noreferrer">
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 py-6 text-lg font-medium shadow-lg hover:shadow-orange-200 mb-4"
              >
                <Image
                  src="/shopee-logo.png"
                  alt="Shopee"
                  width={28}
                  height={28}
                  className="mr-3"
                />
                 Zephyr Official
              </Button>
            </a>

            <a href="https://www.tiktok.com/@litaasprianty" target="_blank" rel="noopener noreferrer">
              <Button 
                className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-300 py-6 text-lg font-medium shadow-lg hover:shadow-gray-200"
              >
                <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                 Zephyr Official
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}