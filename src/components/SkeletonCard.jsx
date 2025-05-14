const SkeletonCard = () => {
     return (
    <div className="animate-pulse border rounded-lg p-4 shadow">
      <div className="bg-gray-300 h-40 mb-4 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard