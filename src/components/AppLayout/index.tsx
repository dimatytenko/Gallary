import {FC} from 'react';
import {Drawer, Button} from 'antd';
import {useNavigate} from 'react-router-dom';

import {StyledLayout, Main, Container, DrawerContent, Label, InfoWrapper} from './styles';
import {IAppLayoutProps} from '../../types/layout';
import {route} from '../../constants/routes';

export const AppLayout: FC<IAppLayoutProps> = ({
  children,
  header,
  footer,
  hideHeader,
  hideFooter,
  open,
  onClose,
  logOut,
  createCollection,
  collectionId,
  user,
  ...props
}) => {
  const navigate = useNavigate();

  const goToCollection = () => {
    navigate(route.collection.path);
    onClose?.();
  };

  const onLogOut = () => {
    logOut?.();
    onClose?.();
  };

  return (
    <StyledLayout {...props}>
      {!hideHeader && header}
      <Main>
        <Container>{children}</Container>
        <Drawer title="Account" placement="right" onClose={onClose} open={open}>
          <DrawerContent>
            <>
              {!collectionId ? (
                <Button onClick={createCollection}>Create a collection</Button>
              ) : (
                <InfoWrapper>
                  <Label>{user?.username}</Label>
                  <Label>{user?.name}</Label>
                  <Label>{user?.email}</Label>
                  <Button onClick={goToCollection}>Go to collection</Button>
                </InfoWrapper>
              )}
            </>
            <Button onClick={onLogOut}>Log out</Button>
          </DrawerContent>
        </Drawer>
      </Main>
      {!hideFooter && footer}
    </StyledLayout>
  );
};
