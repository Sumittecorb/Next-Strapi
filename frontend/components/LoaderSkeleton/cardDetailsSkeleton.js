export default function CardDetailsSkeleton() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div
          role="status"
          className="grid grid-cols-2 mt-10 max-w-full animate-pulse border-2 marker:border-blue-500 rounded-2xl py-8 px-5"
        >
          <div>
            <div className="bg-gray-200 dark:bg-gray-700 w-full h-96 mb-4 m-auto"></div>
          </div>

          <div className="pl-5">
            <div className="h-7 bg-gray-200  dark:bg-gray-700 max-w-[480px] mb-10"></div>
            <div className="h-2 bg-gray-200  dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200  dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200  dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200  dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="flex items-center w-full space-x-10 max-w-[360px]">
              <div className="w-20 h-7 bg-gray-200 dark:bg-gray-700  max-w-[100px] mt-10"></div>
              <div className="w-20 h-7 bg-gray-200 dark:bg-gray-700  max-w-[100px] mt-10"></div>
              <div className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 mt-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
