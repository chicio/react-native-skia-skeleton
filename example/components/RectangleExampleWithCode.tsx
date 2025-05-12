import type { FC, ReactNode } from 'react';
import { Subtitle } from './Subtitle';
import { Paragraph } from './Paragraph';
import { CodeExample } from './CodeExample';

type RectangleExampleWithCodeProps = {
  title: string;
  description: string;
  code: string;
  children: ReactNode;
};

export const RectangleExampleWithCode: FC<RectangleExampleWithCodeProps> = ({
  title,
  description,
  code,
  children,
}) => (
  <>
    <Subtitle>{title}</Subtitle>
    <Paragraph>{description}</Paragraph>
    <CodeExample code={code} language={'typescript'} />
    {children}
  </>
);
