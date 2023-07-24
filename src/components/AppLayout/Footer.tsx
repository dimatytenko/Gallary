import {FC} from 'react';

import {FooterComponentWrapper, Container, FooterContainer, TextCopy} from './styles';
import {IFooterComponentProps} from '../../types/layout';

export const FooterComponent: FC<IFooterComponentProps> = ({year}) => {
  return (
    <FooterComponentWrapper>
      <Container>
        <FooterContainer>
          <TextCopy>Copyright &copy; {year}. Created by Tytenko Dmytro.</TextCopy>
        </FooterContainer>
      </Container>
    </FooterComponentWrapper>
  );
};
