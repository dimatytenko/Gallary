import {WithChildren} from '../types/helpers';
import {IUser} from './user';

export interface IAppLayoutProps extends WithChildren {
  hideHeader?: boolean;
  hideFooter?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  logOut: () => void;
  createCollection: () => void;
  collectionId: string | null;
  user: IUser | null;
}

export interface IFooterComponentProps {
  year: number;
}
