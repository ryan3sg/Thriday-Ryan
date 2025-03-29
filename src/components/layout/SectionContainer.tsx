import { FunctionComponent, ReactNode } from 'react';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
* Use this to wrap to separate sections of UI.
*/
const SectionContainer: FunctionComponent<SectionContainerProps> = ({
  children,
  className = '',
}) => (
  <section
    className={`c-container-section ${className}`}
  >
    {children}
  </section>
);

export default SectionContainer;
