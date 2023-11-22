import React from 'react';
import PropTypes from 'prop-types';

const PrintDetails = ({ data }) => (
  <section className="details-section">
    {Object.entries(data).map((item) => {
      if (typeof item[1] === 'number' && item[1].toString().length < 15 && item[0].toString().length < 15) {
        return (
          <p>
            {item[0]}
            {' '}
            <span>{item[1]}</span>
            {' '}
          </p>
        );
      }
      if (item[1] !== null && typeof item[1] !== 'object' && item[0] !== 'image' && item[0].length < 15) {
        return (
          <p>
            {item[0]}
            {' '}
            <span>{item[1]}</span>
          </p>
        );
      }
      return null;
    })}
  </section>
);
PrintDetails.propTypes = {
  data: PropTypes.shape([PropTypes.object]).isRequired,
};
export default PrintDetails;
