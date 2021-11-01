import React from "react";
import PropTypes from 'prop-types';
const Congrats: React.FC = (props: any) => {
  return (
    <>
      {props.success ? (
        <div data-test="congrates-component">
          <span data-test="congrats-message">
            Congratulations !! You guessed the word!
          </span>
        </div>
      ) : (
        <div data-test="congrates-component"></div>
      )}
    </>
  );
};

export default Congrats;
