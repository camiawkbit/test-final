export function LandingHeroSection(props: any) {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 text-center py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
        {props.t1}
      </h1>
      <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 mt-6">
        {props.t2}
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 mt-8 rounded-lg transition-colors duration-300">
        {props.t3}
      </button>
    </header>
  );
}
