function Placecard({ name, location, distance, date, pricePerNight }) {
  return (
    <div className="p-3 rounded-lg">
      {/* 회색 이미지 대체 박스 */}
      <div className="w-80 h-80 bg-gray-300 rounded-xl mb-5"></div>

      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm text-gray-500">{distance}</p>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-sm">{pricePerNight} /박</p>
    </div>
  );
}

function Cards() {
  const Items = [
    {
      id: 1,
      name: '1번 박스',
      location: '대구',
      distance: '100km',
      date: '5월 5일 ~ 5월 6일',
      pricePerNight: '₩100,000',
    },
    {
      id: 2,
      name: '2번 박스',
      location: '대구',
      distance: '100km',
      date: '5월 5일 ~ 5월 6일',
      pricePerNight: '₩100,000',
    },
    {
      id: 3,
      name: '3번 박스',
      location: '대구',
      distance: '100km',
      date: '5월 5일 ~ 5월 6일',
      pricePerNight: '₩100,000',
    },
    {
      id: 4,
      name: '4번 박스',
      location: '대구',
      distance: '100km',
      date: '5월 5일 ~ 5월 6일',
      pricePerNight: '₩100,000',
    },
    {
      id: 5,
      name: '5번 박스',
      location: '대구',
      distance: '100km',
      date: '5월 5일 ~ 5월 6일',
      pricePerNight: '₩100,000',
    },
    {
      id: 6,
      name: '6번 박스',
      location: '대구',
      distance: '100km',
      date: '5월 5일 ~ 5월 6일',
      pricePerNight: '₩100,000',
    },
    {
      id: 7,
      name: '7번 박스',
      location: '대구',
      distance: '100km',
      date: '5월 5일 ~ 5월 6일',
      pricePerNight: '₩100,000',
    },
    {
      id: 8,
      name: '8번 박스',
      location: '대구',
      distance: '100km',
      date: '5월 5일 ~ 5월 6일',
      pricePerNight: '₩100,000',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {Items.map((item) => (
        <Placecard
          key={item.id}
          name={item.name}
          location={item.location}
          distance={item.distance}
          date={item.date}
          pricePerNight={item.pricePerNight}
        />
      ))}
    </div>
  );
}

export default Cards;
