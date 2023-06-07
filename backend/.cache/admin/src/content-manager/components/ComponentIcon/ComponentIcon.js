import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Flex } from '@strapi/design-system';

const WIDTH_S = 5;
const WIDTH_M = 8;

const Wrapper = styled(Flex)`
  border-radius: ${({ showBackground }) => (showBackground ? `50%` : 0)};
  color: ${({ theme }) => theme.colors.neutral600};
  height: ${({ theme, size }) => theme.spaces[size === 'S' ? WIDTH_S : WIDTH_M]};
  width: ${({ theme, size }) => theme.spaces[size === 'S' ? WIDTH_S : WIDTH_M]};

  svg {
    height: ${({ theme, size }) => theme.spaces[size === 'S' ? WIDTH_S - 2 : WIDTH_M - 3]};
    width: ${({ theme, size }) => theme.spaces[size === 'S' ? WIDTH_S - 2 : WIDTH_M - 3]};
  }
`;

export function ComponentIcon({ showBackground = true, size = 'M' }) {
  return (
    <Wrapper
      alignItems="center"
      background={showBackground ? 'neutral200' : null}
      justifyContent="center"
      size={size}
      showBackground={showBackground}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z"
          fill="currentColor"
        />
      </svg>
    </Wrapper>
  );
}

ComponentIcon.defaultProps = {
  showBackground: true,
  size: 'M',
};

ComponentIcon.propTypes = {
  showBackground: PropTypes.bool,
  size: PropTypes.string,
};
