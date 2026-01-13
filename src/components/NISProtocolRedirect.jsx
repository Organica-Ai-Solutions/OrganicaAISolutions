import { useEffect } from 'react';

const NISProtocolRedirect = () => {
  useEffect(() => {
    window.location.href = "https://nisprotocol.organicaai.com/";
  }, []);
  
  return <div className="p-12 text-center">Redirecting to NIS Protocol documentation...</div>;
};

export default NISProtocolRedirect;
