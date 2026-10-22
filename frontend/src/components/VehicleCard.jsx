function VehicleCard({ model, type, pricePerDay, available }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        width: "250px",
      }}
    >
      <h3>{model}</h3>
      <p>Type: {type}</p>
      <p>Price Per Day: ₹{pricePerDay}</p>

      {available ? (
        <button>Book Now</button>
      ) : (
        <span
          style={{
            color: "white",
            background: "red",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Not Available
        </span>
      )}
    </div>
  );
}

export default VehicleCard;