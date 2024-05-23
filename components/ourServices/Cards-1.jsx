export default function Cards1({ data }) {
  return (
    <section class="p-6 dark:bg-gray-100 dark:text-gray-800">
      <div class="container mx-auto p-10">
        <h2 class="text-5xl font-bold text-center dark:text-gray-900">
          {data.title}
        </h2>
        <div class="grid gap-6 my-16 lg:grid-cols-3">
          {data.content.map((item, index) => {
            return (
              <div class="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50"
                  style={{ backgroundColor: "rgb(225,150,83)" }}
                >
                  {index + 1}
                </div>
                <p class="text-2xl font-semibold">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
