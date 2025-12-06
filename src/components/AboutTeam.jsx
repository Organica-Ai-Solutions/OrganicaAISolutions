import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function AboutTeam() {
  const team = [
    {
      id: 1,
      name: "Diego Torres",
      role: "CEO & Co-Founder",
      image: "/images/team/DiegoTorres.jpeg",
      description: "Creator of NIS Protocol v4.0.2. Full-stack developer specializing in Python ML, NVIDIA Isaac robotics, and multi-agent AI systems. Built 39+ repositories including NeuroLinux and NIS-Hub.",
      achievements: ["NIS Protocol Creator", "39+ GitHub Repos", "NVIDIA Isaac Integration"],
      linkedin: "https://www.linkedin.com/in/diego-torres--/",
      github: "https://github.com/pentius00"
    },
    {
      id: 2,
      name: "Henok Worede",
      role: "CTO & Co-Founder",
      image: "/images/team/HenokWorede.jpeg",
      description: "Mobile architecture lead. Built Tanda Circles, KATAPP, and CarFlipPlus. Expert in Flutter/Dart with multiple deployed apps on iOS and Android. Drives cross-platform strategy.",
      achievements: ["5+ Deployed Apps", "Flutter Expert", "Mobile Architecture"],
      linkedin: "https://www.linkedin.com/in/henok-worede/",
      github: "https://github.com/henokwon"
    },
    {
      id: 3,
      name: "Blake Salzman",
      role: "MCO & Co-Founder",
      image: "/images/team/BlakeSalzman.jpeg",
      description: "Business development and partnerships. Temple University graduate. Leads enterprise strategy, investor relations, and go-to-market for NIS Protocol commercialization.",
      achievements: ["Temple University", "Enterprise Strategy", "Partnerships"],
      linkedin: "https://www.linkedin.com/in/blake-salzman-268a45260/",
      github: "https://github.com/blakesalzman"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          A small team of builders shipping real AI products. We're an R&D startup — experimental, fast-moving, and focused on results.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg 
                        transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover
                         ring-2 ring-primary-500/20 hover:ring-primary-500 transition-all duration-300"
              />
              <h3 className="text-xl font-semibold text-gray-900 text-center">{member.name}</h3>
              <p className="text-primary-600 font-medium text-center mb-4">{member.role}</p>
              <p className="text-gray-600 text-center mb-3 text-sm">{member.description}</p>
              {member.achievements && (
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {member.achievements.map((achievement) => (
                    <span key={achievement} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
                      {achievement}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex justify-center space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-500 transition-colors"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  title="GitHub Profile"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 