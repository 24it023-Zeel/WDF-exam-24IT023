import { useState } from "react";

export default function FleetPage() {
  const [vehicle, setVehicle] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <div>
      <h1>Fleet Page</h1>

      <input
        placeholder="Vehicle"
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={pickupDate}
        onChange={(e) => setPickupDate(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />

      <h3>Selected Vehicle : {vehicle}</h3>
      <p>Pickup : {pickupDate}</p>
      <p>Return : {returnDate}</p>
    </div>
  );
}