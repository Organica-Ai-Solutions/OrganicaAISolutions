import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function AboutTeam() {
  const team = [
    {
      id: 1,
      name: "Diego Torres",
      role: "CEO & Co-Founder",
      image: "/images/team/DiegoTorres.jpeg",
      description: "Full Stack Developer with expertise in blockchain, Python machine learning, data analytics, Flutter, and React/Vue. Passionate about creating innovative fintech solutions and leveraging cutting-edge technologies to solve real-world problems.",
      linkedin: "https://www.linkedin.com/in/diego-torres--/",
      github: "https://github.com/pentius00"
    },
    {
      id: 2,
      name: "Henok Worede",
      role: "CTO & Co-Founder",
      image: "/images/team/HenokWorede.jpeg",
      description: "Expert Flutter developer with multiple deployed applications. Specializes in mobile development and cross-platform solutions. Strong background in building secure, scalable applications with a focus on exceptional user experience.",
      linkedin: "https://www.linkedin.com/in/henok-worede/",
      github: "https://github.com/henokwon"
    },
    {
      id: 3,
      name: "Blake Salzman",
      role: "MCO & Co-Founder",
      image: "/images/team/BlakeSalzman.jpeg",
      description: "Experienced entrepreneur and business leader with a strong background in finance and technology. Graduate of Temple University with expertise in business development and strategic partnerships.",
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
          Our diverse team of experts combines technology and agricultural knowledge to create innovative solutions for sustainable farming.
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
              <p className="text-gray-600 text-center mb-4 text-sm">{member.description}</p>
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