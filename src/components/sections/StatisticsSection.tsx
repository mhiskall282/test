export default function StatisticsSection() {
  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sans font-normal text-white mb-6 tracking-wide">
            Industry-Leading Web3 Education<br/> 
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
              At Your Fingertips
            </span>
          </h2>
          <p className="text-lg font-sans font-light" style={{ color: '#BBBBBB' }}>
            Master Web3 development with hands-on projects and real-world applications
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 place-items-center">
          {/* Students Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Students
            </p>
            <div className="text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              2,500+
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Active learners worldwide.
            </p>
          </div>

          {/* Courses Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Courses
            </p>
            <div className="text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              25+
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Web3 programs with more coming.
            </p>
          </div>

          {/* Job Placement Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Job Placement
            </p>
            <div className="text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Career success rate.
            </p>
          </div>

          {/* Industry Partners Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Partners
            </p>
            <div className="text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Industry connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}