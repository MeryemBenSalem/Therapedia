"use client";
import "../Styles/hours.css"
import { format, isSameMinute } from "date-fns";
import { CheckCircle2 } from "lucide-react";
import React, { memo, useMemo, useState } from "react";

const AvailableHours = memo(function AvailableHours({ freeTimes }) {
    const [selectedTime, setSelectedTime] = useState();

    return (
        <div className="available-hours-container">
            <div className="hours-grid">
                {freeTimes.map((hour, hourIdx) => (
                    <div key={hourIdx}>
                        <button
                            type="button"
                            className={`hour-button ${
                                selectedTime && isSameMinute(selectedTime, hour) ? "selected" : ""
                            }`}
                            onClick={() => setSelectedTime(hour)}
                        >
                            <CheckCircle2
                                className={`selected-icon ${
                                    selectedTime && isSameMinute(selectedTime, hour) ? "block" : ""
                                }`}
                            />
                            {format(hour, "HH:mm")}
                        </button>
                    </div>
                ))}
            </div>
            {selectedTime && (
                <div className="selected-time">
      <span className="selected-time-label">
        la date de votre disponibilité:
      </span>
                    <span className="selected-time-value">
        {format(selectedTime, "dd MMMM yyyy HH:mm")}
      </span>
                </div>
            )}
        </div>

    );
});

export default AvailableHours;
