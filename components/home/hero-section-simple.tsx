{/* Social CTA */}
<div className="flex flex-col items-center gap-4 pt-6">

  <p className="text-white text-sm sm:text-base opacity-90">
    {language === 'en' 
      ? 'Follow us on social media for updates'
      : '关注我们的社交媒体以获取最新动态'}
  </p>

  <div className="flex gap-6">

    {/* Facebook */}
    <a
      href="https://www.facebook.com/stardigitalsolutionsph"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-[#1877F2] transition transform hover:scale-110"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.8H17l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/stardigitalsolutionsph/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-pink-400 transition transform hover:scale-110"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.8a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
      </svg>
    </a>

    {/* TikTok */}
    <a
      href="https://www.tiktok.com/@stardigitalsolutionsph"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-cyan-400 transition transform hover:scale-110"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M21 8.5a6.5 6.5 0 0 1-4-1.4v6.9a5.5 5.5 0 1 1-5.5-5.5c.3 0 .7 0 1 .1v2.7a2.8 2.8 0 1 0 2.8 2.8V2h2.7a6.5 6.5 0 0 0 3 3.6v2.9z"/>
      </svg>
    </a>

  </div>
</div>
