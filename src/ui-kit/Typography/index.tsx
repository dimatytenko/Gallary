import React from 'react';

import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledHeading5,
  StyledHeading6,
  StyledHeadingMedium,
  TextBody1,
  TextBody2,
  TextBody3,
  TextBody4,
  TextBody1Bold,
  TextBody2Bold,
  TextBody3Bold,
  TextBody4Bold,
  TextSmall,
  TextSmallBold,
  TextVerySmall,
  TextVerySmallBold,
  StyledTextNote,
  StyledHeadingMedium2,
  StyledHeadingMedium3,
} from './styles';
import {WithChildren} from '../../types/helpers';

export const Heading1: React.FC<WithChildren> = (props) => <StyledHeading1 {...props} />;
export const Heading2: React.FC<WithChildren> = (props) => <StyledHeading2 {...props} />;
export const Heading3: React.FC<WithChildren> = (props) => <StyledHeading3 {...props} />;
export const Heading4: React.FC<WithChildren> = (props) => <StyledHeading4 {...props} />;
export const Heading5: React.FC<WithChildren> = (props) => <StyledHeading5 {...props} />;
export const Heading6: React.FC<WithChildren> = (props) => <StyledHeading6 {...props} />;
export const HeadingMedium: React.FC<WithChildren> = (props) => <StyledHeadingMedium {...props} />;
export const HeadingMedium2: React.FC<WithChildren> = (props) => <StyledHeadingMedium2 {...props} />;
export const HeadingMedium3: React.FC<WithChildren> = (props) => <StyledHeadingMedium3 {...props} />;

export const Text1: React.FC<WithChildren> = (props) => <TextBody1 {...props} />;
export const Text2: React.FC<WithChildren> = (props) => <TextBody2 {...props} />;
export const Text3: React.FC<WithChildren> = (props) => <TextBody3 {...props} />;
export const Text4: React.FC<WithChildren> = (props) => <TextBody4 {...props} />;
export const Small: React.FC<WithChildren> = (props) => <TextSmall {...props} />;
export const VerySmall: React.FC<WithChildren> = (props) => <TextVerySmall {...props} />;

export const Text1Bold: React.FC<WithChildren> = (props) => <TextBody1Bold {...props} />;
export const Text2Bold: React.FC<WithChildren> = (props) => <TextBody2Bold {...props} />;
export const Text3Bold: React.FC<WithChildren> = (props) => <TextBody3Bold {...props} />;
export const Text4Bold: React.FC<WithChildren> = (props) => <TextBody4Bold {...props} />;
export const SmallBold: React.FC<WithChildren> = (props) => <TextSmallBold {...props} />;
export const VerySmallBold: React.FC<WithChildren> = (props) => <TextVerySmallBold {...props} />;

export const TextNote: React.FC<WithChildren> = (props) => <StyledTextNote {...props} />;
