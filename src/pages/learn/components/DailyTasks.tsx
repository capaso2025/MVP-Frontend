function DailyTasks() {
  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h2 className="mb-4 text-center text-xl font-bold">Daily tasks</h2>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="mt-1 mr-2 inline-block h-4 w-4 border border-black"></span>
          <span>Completado</span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 inline-block h-4 w-4 border border-black"></span>
          <span>En proceso</span>
        </li>
      </ul>
    </div>
  );
}

export default DailyTasks;
