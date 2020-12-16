function App() {
  return (
    <div className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="min-h-screen flex justify-center items-center">
        <header>
          <div class="w-12 h-12 rounded-xl mb-8 bg-gradient-to-br flex items-center justify-center from-lime-300 to-emerald-500  ">
            <svg width="34" height="33" viewBox="0 0 34 33" fill="none"><g filter="url(#dark-mode_svg__filter0_dd)"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.587 18.39c.216-.869-.826-1.433-1.602-.986A11.945 11.945 0 0123 19c-6.627 0-12-5.372-12-12 0-.974.116-1.922.336-2.83.21-.87-.625-1.714-1.398-1.26C5.788 5.338 3 9.843 3 15c0 7.732 6.268 14 14 14 6.563 0 12.071-4.516 13.587-10.61z" fill="#ECFCCB"></path></g><defs><filter id="dark-mode_svg__filter0_dd" x="-2" y="-2" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend></filter></defs></svg>
            </div>
          <p className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-emerald-500 dark:text-emerald-400 mb-3">
            TailwindCSS v2.0
          </p>
          <h1 className="text-gray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8">Dark Mode Template</h1>
          <div className="text-gray-500 dark:text-gray-400 text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-6">
            <p>This is a boilerplate template built with official features from version 2.0!</p>
            <a
              href={`https://tailwindcss.com/docs/dark-mode`}
              target="_blank"
              rel="noreferrer"
              className="text-base sm:text-lg lg:text-base xl:text-lg font-medium text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
            >
              Read documentation -></a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
