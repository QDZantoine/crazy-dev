interface CardProps {
    title: string;
    content: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    );
  };
  
  export default Card;