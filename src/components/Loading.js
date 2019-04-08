import React from 'react';
import ReactLoading from 'react-loading';
import { LoadingContainer } from '../styles/Styles';

const Loading = () => {
  return (
    <LoadingContainer>
      <ReactLoading type="spin" color="#2e7c31" height={50} width={60} />
    </LoadingContainer>
  );
};

export default Loading;
