import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode; // Card content
  className?: string; // Additional custom styles
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "rounded-lg shadow-lg border border-gray-200 bg-white p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={clsx("mb-4", className)}>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      {description && (
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      )}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return (
    <h2
      className={clsx(
        "text-xl font-semibold text-gray-800 mb-2",
        className
      )}
    >
      {children}
    </h2>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <p className={clsx("text-sm text-gray-600", className)}>
      {children}
    </p>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return <div className={clsx("text-gray-700", className)}>{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx("mt-4 border-t pt-4 text-sm text-gray-500", className)}>
      {children}
    </div>
  );
};
