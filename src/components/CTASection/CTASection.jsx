const CTASection = () => {
    return (
      <section className="bg-white py-20 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Built for real connection
          </h2>
          <p className="text-gray-600 text-base mb-6">
            Hey! I’m Juan — a language learner and developer. I'm building this app because I wanted a safe, fun, and instant way to speak with real people around the world.  
            <br />
            If that sounds like something you'd use, I’d love for you to be part of the beta.
          </p>
  
          {/* Email Form */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white font-medium px-6 py-2 rounded-md hover:bg-indigo-600 transition"
            >
              Join the Waitlist
            </button>
          </form>
  
          <p className="text-sm text-gray-400 mb-6">No spam. Just launch updates.</p>
  
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-500 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-500 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-500 transition">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTASection;
  