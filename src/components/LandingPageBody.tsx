export function LandingPageBody(props: any) {
  return (
    <main className="py-20 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center">
        {props.t1}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-center">
        <div>
          {props.t2}
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mt-6">
            {props.t3}
          </h3>
          <p className="text-gray-500 dark:text-gray-600">{props.t4}</p>
        </div>
        <div>
          {props.t5}
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mt-6">
            {props.t6}
          </h3>
          <p className="text-gray-500 dark:text-gray-600">{props.t7}</p>
        </div>
        <div>
          {props.t8}
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mt-6">
            {props.t9}
          </h3>
          <p className="text-gray-500 dark:text-gray-600">{props.t10}</p>
        </div>
      </div>
    </main>
  );
}
