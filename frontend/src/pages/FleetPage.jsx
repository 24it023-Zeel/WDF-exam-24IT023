import VehicleCard from "../components/VehicleCard";

function FleetPage() {
  const vehicles = [
    {
      model: "Swift",
      type: "Hatchback",
      pricePerDay: 1200,
      available: true,
    },
    {
      model: "Creta",
      type: "SUV",
      pricePerDay: 2500,
      available: false,
    },
  ];

  return (
    <div>
      <h1>Fleet Page</h1>

      {vehicles.map((vehicle, index) => (
        <VehicleCard
          key={index}
          model={vehicle.model}
          type={vehicle.type}
          pricePerDay={vehicle.pricePerDay}
          available={vehicle.available}
        />
      ))}
    </div>
  );
}

export default FleetPage;