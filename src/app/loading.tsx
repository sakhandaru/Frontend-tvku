import Image from 'next/image';

const Loading = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Image
          src="/images/tvkublue2x.png"
          width={200}
          height={120}
          alt="tvku logo"
          className="animate-pulse"
        />
      </div>
    );
  };
  
  export default Loading;