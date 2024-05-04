import { Info, MapPin, Pencil, X } from "lucide-react";
import { useState } from "react";

const LocationWidget = ({ className }: { className?: string }) => {
  const [location, setLocation] = useState("");

  return (
    <div className={`location_widget ${className}`}>
      <div className="location_search d-flex align-items-center">
        <label
          htmlFor="location"
          className="d-flex justify-content-between align-items-center"
        >
          <MapPin />
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        {location.length <= 0 ? (
          <Pencil />
        ) : (
          <X onClick={() => setLocation("")} />
        )}
      </div>
      <div className="divider mt-3"></div>

      <div className="location_note d-flex align-items-start gap-2 mt-3">
        <Info color="#B8B8B8" size={32} />
        <p>
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </div>
  );
};

export default LocationWidget;
