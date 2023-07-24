import {WithChildren} from '../types/helpers';

export interface IAppLayoutProps extends WithChildren {
  hideHeader?: boolean;
  hideFooter?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export interface IFooterComponentProps {
  year: number;
}
