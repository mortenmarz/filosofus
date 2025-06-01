import React from 'react';

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ current, total }) => {
  return (
    <div className="text-right">
      <span className="inline-block px-4 py-1 rounded-full bg-purple-bg bg-opacity-20 text-white font-medium">
        Spørgsmål {current} af {total}
      </span>
    </div>
  );
};

export default ProgressIndicator;