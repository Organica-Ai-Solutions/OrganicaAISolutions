import { useEffect } from 'react';

const NISProtocolRedirect = () => {
  useEffect(() => {
    window.location.href = "https://organica-ai-solutions.github.io/NIS_Protocol/docs/NIS_Protocol_Whitepaper.html";
  }, []);
  
  return <div className="p-12 text-center">Redirecting to NIS Protocol documentation...</div>;
};

export default NISProtocolRedirect;
