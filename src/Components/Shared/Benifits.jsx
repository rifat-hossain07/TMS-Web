import Header from "./Header";

const Benifits = () => {
  return (
    <div>
      <div className="">
        <div
          className="text-center "
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <Header text="Users & Benefits" />
        </div>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row lg:mx-10 gap-10">
            {/* Left Side */}
            <div data-aos="fade-down" data-aos-duration="5000">
              {/* Left Side 1*/}
              <div className="my-5">
                <h1 className="font-semibold text-2xl border-b-4 border-blue-300  ">
                  Developers & Tech Enthusiasts:
                </h1>
                <p>
                  Their Benefit is Access to robust project tracking, version
                  control, and collaboration tools. Interest in Integration with
                  development platforms, task automation, and coding workflows.
                </p>
              </div>
              {/* Left Side 2*/}
              <div className="my-5">
                <h1 className="font-semibold text-2xl border-b-4 border-blue-300  ">
                  Corporate Professionals & Managers:
                </h1>
                <p>
                  Their Benefit is Streamlined task delegation, progress
                  monitoring, and team coordination. Interest in Reporting
                  functionalities, priority setting, and project timeline
                  management.
                </p>
              </div>
              {/* Left Side 3*/}
              <div className="my-5">
                <h1 className="font-semibold text-2xl border-b-4 border-blue-300 ">
                  Bankers & Finance Experts:
                </h1>
                <p>
                  Their Benefit is Task-oriented financial analysis, secure data
                  handling, and compliance management. Interest in Integration
                  with financial software, risk assessment tools, and budget
                  tracking.
                </p>
              </div>
            </div>
            {/* Right Side */}
            <div data-aos="fade-up" data-aos-duration="5000">
              {/* Right Side 1*/}
              <div className="my-5">
                <h1 className="font-semibold text-2xl border-b-4 border-blue-300 ">
                  Designers & Creatives:
                </h1>
                <p>
                  Their Benefit is Visual project planning, asset management,
                  and creative collaboration features. Interest in
                  Design-centric task boards, file sharing, and visualization
                  capabilities.
                </p>
              </div>
              {/* Right Side 2*/}
              <div className="my-5">
                <h1 className="font-semibold text-2xl border-b-4 border-blue-300 ">
                  Entrepreneurs & Startups:
                </h1>
                <p>
                  Their Benefit is Flexible task organization, scalability, and
                  lean project management. Interest in Customization options,
                  scalability for growing teams, and cost-effective solutions.
                </p>
              </div>
              {/* Right Side 3*/}
              <div className="my-5">
                <h1 className="font-semibold text-2xl border-b-4 border-blue-300 ">
                  Students & Educators:
                </h1>
                <p>
                  Their Benefit is Task scheduling, group project management,
                  and resource sharing. Interest in Education-specific task
                  templates, study group collaboration, and academic planning
                  tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
