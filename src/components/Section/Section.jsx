import { SectionContent, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionContent>
      {title && <Title>{title}</Title>}
      {children}
    </SectionContent>
  );
};

Section.propType = {
  title: PropTypes.string,
  children: PropTypes.node,
};
