const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center flex flex-col items-center transition-transform hover:scale-105 duration-200">
        <div className="w-20 h-20 mb-4">
          <img src={icon} alt={`${title} icon`} className="w-full h-full object-contain" />
        </div>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;
  