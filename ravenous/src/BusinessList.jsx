import Business from "./Business";

const BusinessList = () => {
  const businesses = [
    {
      name: "MarginOTTO",
      address: "110 paddington Way",
      city: "Bordertown",
      category: "Italian",
      rating: 4.5,
      reviewCount: 90,
      postcode: "NY 11010",
    },
    {
      name: "restaurant 2",
      address: "55 restaurants place",
      category: "Sushi",
      rating: 3,
      reviewCount: 400,
      postcode: "NY 11111",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {businesses.map((biz) => (
          <Business key={biz.name} {...biz} />
        ))}
      </div>
    </>
  );
};

export default BusinessList;
