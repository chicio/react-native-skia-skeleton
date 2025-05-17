import type { FC, ReactNode } from 'react';
import { Subtitle } from '../design-system/Subtitle';
import { Paragraph } from '../design-system/Paragraph';
import { ExpandableCodeExample } from './ExpandableCodeExample';
import { Platform } from 'react-native';

type RectangleExampleWithCodeProps = {
  title: string;
  description: string;
  code: string;
  children: ReactNode;
};

export const ExampleWithCode: FC<RectangleExampleWithCodeProps> = ({
  title,
  description,
  code,
  children,
}) => (
  <>
    <Subtitle>{title}</Subtitle>
    <Paragraph>{description}</Paragraph>
    {Platform.OS === 'web' && (
      <ExpandableCodeExample code={code} language={'typescript'} />
    )}
    {children}
  </>
);
