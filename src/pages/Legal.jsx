import React from 'react';

const Legal = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Legal Information</h1>
        <p className="text-gray-600 mb-8">Last updated: December 2025</p>
        
        {/* R&D Startup Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Research & Development Startup Notice</h2>
          <p className="text-yellow-900 mb-3">
            <strong>Organica AI Solutions is an early-stage R&D startup.</strong> Our technologies, including the NIS Protocol, 
            NeuroLinux, NIS Hub, and related projects, are <strong>experimental and under active development</strong>.
          </p>
          <ul className="list-disc pl-6 text-yellow-900 space-y-2">
            <li>All software and technologies are provided "as-is" without warranties of any kind</li>
            <li>Features, capabilities, and performance metrics may change without notice</li>
            <li>Our research represents ongoing work that may not be production-ready for all use cases</li>
            <li>Results demonstrated in testing environments may not be reproducible in all scenarios</li>
            <li>We make no guarantees regarding commercial viability or fitness for specific purposes</li>
          </ul>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Copyright Notice</h2>
          <p>
            © 2024 Organica AI Solutions. All rights reserved.
          </p>
          <p>
            All content on this website, including but not limited to text, graphics, logos, button icons, 
            images, audio clips, digital downloads, data compilations, and software, is the property of 
            Organica AI Solutions or its content suppliers and is protected by international copyright laws.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Trademark Notice</h2>
          <p>
            Organica AI Solutions, the Organica AI Solutions logo, NIS Protocol, and all related names, logos, product 
            and service names, designs, and slogans are trademarks of Organica AI Solutions or its 
            affiliates or licensors. You must not use such marks without the prior written permission of 
            Organica AI Solutions. All other names, logos, product and service names, designs, and slogans 
            on this website are the trademarks of their respective owners.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Research Intellectual Property</h2>
          <p>
            All research, methodologies, algorithms, and technologies described on this website, including but not 
            limited to the NIS Protocol, Physics-Informed Neural Networks implementations, Multi-Agent Systems, 
            and other AI technologies developed by Organica AI Solutions, are protected by intellectual property laws.
          </p>
          <p>
            Our research publications, code repositories, and technical documentation may be subject to specific 
            licensing terms. Unless explicitly stated otherwise, our research intellectual property is not available 
            for commercial use without proper licensing agreements. Academic and research use may be permitted under 
            specific conditions as outlined in the relevant documentation.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Legal Disclaimer</h2>
          <p>
            The information provided on this website is for general informational purposes only. All 
            information on the site is provided in good faith, however, we make no representation or warranty 
            of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, 
            availability, or completeness of any information on the site.
          </p>
          <p>
            Under no circumstance shall we have any liability to you for any loss or damage of any kind 
            incurred as a result of the use of the site or reliance on any information provided on the site. 
            Your use of the site and your reliance on any information on the site is solely at your own risk.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">External Links Disclaimer</h2>
          <p>
            The website may contain links to external websites that are not provided or maintained by or in 
            any way affiliated with Organica AI Solutions. Please note that Organica AI Solutions does not 
            guarantee the accuracy, relevance, timeliness, or completeness of any information on these 
            external websites.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Research & Experimental Technology Disclaimer</h2>
          <p>
            <strong>Organica AI Solutions is a research and development startup.</strong> The technologies, software, 
            and research information provided on this website are for informational and educational purposes only.
          </p>
          <p>
            Our work in neuro-inspired AI systems (NIS Protocol), physics-informed neural networks, NVIDIA Isaac 
            robotics integration, multi-agent systems, NeuroLinux, NIS Hub, and other AI technologies represents 
            <strong> ongoing experimental research</strong> that is subject to change as our understanding evolves.
          </p>
          <p>
            <strong>Important considerations:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Technologies described may be in various stages of development (conceptual, prototype, beta, or production)</li>
            <li>Performance metrics and capabilities are based on internal testing and may vary in different environments</li>
            <li>Features and APIs may change, be deprecated, or be discontinued without prior notice</li>
            <li>Integration with third-party systems (NVIDIA Isaac, Kafka, Redis, etc.) depends on external factors beyond our control</li>
            <li>Our research does not constitute professional advice for any specific application or industry</li>
          </ul>
          <p>
            Organica AI Solutions hereby disclaims any and all liability to any party for any direct, indirect, 
            implied, punitive, special, incidental, or other consequential damages arising directly or indirectly 
            from any use of our research information or technologies, which are provided "as is" without warranties 
            of any kind, express or implied.
          </p>
          <p>
            <strong>No Investment or Business Advice:</strong> Nothing on this website constitutes investment advice, 
            business advice, or a recommendation to use our technologies for any specific purpose. Users should conduct 
            their own due diligence and consult with appropriate professionals before making any decisions based on 
            information provided here.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Fair Use Notice</h2>
          <p>
            This website contains copyrighted material, the use of which has not always been specifically 
            authorized by the copyright owner. We are making such material available in our efforts to 
            advance understanding of environmental, political, human rights, economic, democracy, scientific, 
            and social justice issues, etc. We believe this constitutes a 'fair use' of any such copyrighted 
            material as provided for in section 107 of the US Copyright Law.
          </p>
          <p>
            In accordance with Title 17 U.S.C. Section 107, the material on this site is distributed without 
            profit to those who have expressed a prior interest in receiving the included information for 
            research and educational purposes.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">DMCA Compliance</h2>
          <p>
            Organica AI Solutions respects the intellectual property rights of others and expects its users to 
            do the same. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we will 
            respond promptly to claims of copyright infringement committed using our service.
          </p>
          <p>
            If you believe that your copyrighted work has been copied in a way that constitutes copyright 
            infringement, please provide our copyright agent with the following information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>A physical or electronic signature of a person authorized to act on behalf of the owner of 
                the copyright interest</li>
            <li>A description of the copyrighted work that you claim has been infringed</li>
            <li>A description of where the material that you claim is infringing is located on the site</li>
            <li>Your address, telephone number, and email address</li>
            <li>A statement by you that you have a good faith belief that the disputed use is not authorized 
                by the copyright owner, its agent, or the law</li>
            <li>A statement by you, made under penalty of perjury, that the above information in your notice 
                is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Organica AI Solutions, its officers, directors, 
            employees, agents, and third parties, for any losses, costs, liabilities, and expenses (including 
            reasonable attorney's fees) relating to or arising out of your use of or inability to use the site 
            or services, any user postings made by you, your violation of any terms of this Agreement or your 
            violation of any rights of a third party, or your violation of any applicable laws, rules or regulations.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Information</h2>
          <p>
            If you have any questions about our legal information, please contact us:
          </p>
          <ul className="list-none pl-0 mb-4">
            <li>By email: diego.torres@organicaai.com</li>
            <li>By phone: +1-215-888-8748</li>
            <li>By mail: 1438 N7th st., Philadelphia PA0, 19122, USA</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Legal; 