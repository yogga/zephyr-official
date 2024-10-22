import Image from 'next/image'  
import { Button } from './components/ui/button'  

export default function Home() {  
  return (  
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4">  
      <div className="w-full max-w-md space-y-6">  
        <div className="text-center">  
          <Image  
            src="/logo-zephyr.png"  
            alt="Zephyr Logo"  
            width={200}  
            height={200}  
            className="mx-auto mb-4"  
          />  
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Zephyr Official</h1>  
          <p className="text-lg text-gray-600">Wanginya Enak Poll</p>  
        </div>  

        <div className="space-y-4">  
          <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white mb-4" size="lg">  
            OFFICIAL WEBSITE (soon)  
          </Button>  
          
          <a href="https://www.instagram.com/zephyr.idofficial/" target="_blank" rel="noopener noreferrer">  
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center justify-center mb-4">  
              <Image  
                src="/instagram-new.png"  
                alt="Instagram Logo"  
                width={24}  
                height={24}  
                className="mr-2"  
              />  
              Instagram Zephyr Official  
            </Button>  
          </a>  

          <a href="https://wa.me/+6282334132922?text=halo%20apakah%20parfum%20ada%20?" target="_blank" rel="noopener noreferrer">  
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center mb-4">  
              <Image  
                src="/wa.svg"  
                alt="WhatsApp Logo"  
                width={24}  
                height={24}  
                className="mr-2"  
              />  
              Tanya Admin Whatsapp  
            </Button>  
          </a>  

          <a href="https://id.tokopedia.com/zephyrofficial" target="_blank" rel="noopener noreferrer">  
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center mb-4">  
              <Image  
                src="/tokopedia-logo.svg"  
                alt="Tokopedia Logo"  
                width={24}  
                height={24}  
                className="mr-2"  
              />  
              Tokopedia Zephyr Official  
            </Button>  
          </a>  

          <a href="https://id.shp.ee/hmykZZf" target="_blank" rel="noopener noreferrer">  
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center mb-4">  
              <Image  
                src="/shopee-logo.png"  
                alt="Shopee Logo"  
                width={24}  
                height={24}  
                className="mr-2"  
              />  
              Shopee Zephyr Official  
            </Button>  
          </a>  

          <a href="https://www.tiktok.com/@litaasprianty" target="_blank" rel="noopener noreferrer">  
            <Button className="w-full bg-black hover:bg-gray-800 text-white flex items-center justify-center">  
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">  
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>  
              </svg>  
              TikTok Shop Zephyr Official  
            </Button>  
          </a>  
        </div>  
      </div>  
    </div>  
  )  
}