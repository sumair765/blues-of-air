import React from 'react';

const DetailCard = ({ field, value }) => {

  const hasNumbersOrSpecialChars = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(field);

  const renderField = () => {
    if (hasNumbersOrSpecialChars) {
      const parts = field.split(/([0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/);
      return (
        <h2 className='detail-content-left'>
          {parts.map((part, index) => (
            <span key={index} style={/[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(part) ? { fontSize: '0.6em' } : {}}>
              {part}
            </span>
          ))}
        </h2>
      );
    } else {
      return <h2 className='detail-content-left'>{field.toUpperCase()}</h2>;
    }
  };

  return (
    <div className='detail-card'>
      {renderField()}
      <h2 className='detail-content-right'>{value}</h2>
    </div>
  );
};

export default DetailCard;
