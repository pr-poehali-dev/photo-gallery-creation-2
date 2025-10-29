const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,174,219,0.05),transparent_50%)]" />
      
      <div className="relative z-10 animate-fade-in">
        <div className="flex flex-col items-center gap-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 group-hover:opacity-30 blur transition duration-500" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 hover:scale-105 transition-transform duration-500">
              <img 
                src="https://cdn.poehali.dev/projects/ff89274c-15b6-4e04-a9b1-1fa851e4219e/files/1f58a18c-8a32-4b9d-abad-566cd013b01b.jpg"
                alt="Фото"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
