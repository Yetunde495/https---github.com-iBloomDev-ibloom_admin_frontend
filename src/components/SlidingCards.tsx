
const SlideCard = ({ data }: any) => {
  return (
    <div className="card">
      <h1 className="card__title">{data.title}</h1>
      <p className="card__description">{data.text}</p>
    </div>
  );
};

const SlidingCards = () => {
  const fakeData = {
    title: "Send money to loved ones",
    text: "Experience the convenience and security of Send, enabling you to effortlessly and securely transfer funds to your beloved ones residing overseas. Begin sharing financial support with the ones who hold significance in your life right here",
  };

  const sampleData = Array.from({ length: 4 }, () => fakeData);
  return (
    <section className="sliding-cards">
      {sampleData.map((val, index) => (
        <SlideCard
          key={index}
          data={val}
        />
      ))}
    </section>
  );
};

export default SlidingCards;
