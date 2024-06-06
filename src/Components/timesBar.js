import { memo } from "react";
import { startOfDay } from "date-fns";

const TimesBar = memo(function TimesBar({ times }) {
    // Check if times array is empty before accessing the first element
    const StartOfWeek = times && times.length > 0 ? startOfDay(times[0]) : null;

    return (
        <div>
            {/* Render your component content here */}
        </div>
    );
});

// Set display name for the component
TimesBar.displayName = "TimesBar";

export default TimesBar;

