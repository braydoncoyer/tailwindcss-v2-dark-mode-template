function App() {
  return (
    <div className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="min-h-screen flex justify-center items-center">
        <header>
          <p className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-green-500 dark:text-green-400 mb-3">
            TailwindCSS v2.0
          </p>
          <h1 className="text-gray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8">Dark Mode Template</h1>
          <div className="text-gray-500 dark:text-gray-400 text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-6">
            <p>This is a boilerplate template built with official features from version 2.0!</p>
            <a
              href={`https://tailwindcss.com/docs/dark-mode`}
              target="_blank"
              rel="noreferrer"
              className="text-base sm:text-lg lg:text-base xl:text-lg font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
            >
              Read documentation -></a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
