import React from "react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large"; // Different sizes
  className?: string; // Additional custom styling
}

const spinnerSizes = {
  small: "w-4 h-4 border-2",
  medium: "w-8 h-8 border-4",
  large: "w-12 h-12 border-4",
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  className = "",
}) => {
  return (
    <div
      className={`animate-spin rounded-full border-t-2 border-blue-500 border-r-2 border-transparent ${
        spinnerSizes[size]
      } ${className}`}
    />
  );
};

export default LoadingSpinner;
