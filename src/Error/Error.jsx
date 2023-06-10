const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-gray-700 mb-8">Something went wrong.</p>
      <div className="px-4 py-2 text-9xl font-extrabold text-red-600 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
        404
      </div>
    </div>
  );
};

export default Error;
