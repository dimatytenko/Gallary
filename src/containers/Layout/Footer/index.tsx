import {FooterComponent} from '../../../components/AppLayout/Footer';

export const Footer = () => {
  const year = new Date().getFullYear();

  return <FooterComponent year={year} />;
};
