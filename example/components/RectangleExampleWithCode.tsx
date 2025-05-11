import type { FC } from 'react';
import type { BonesLayout } from '../../src/Bones/BonesFeatures';
import type { ViewStyle } from 'react-native';
import type { BoneAnimation, BoneColors } from '../../src/Bone/BoneFeatures';
import { Subtitle } from './Subtitle';
import { Paragraph } from './Paragraph';
import { CodeExample } from './CodeExample';
import { SkeletonExample } from './SkeletonExample';
import { RectangleExample } from './RectangleExample';

type RectangleExampleWithCodeProps = {
  title: string;
  description: string;
  code: string;
  exampleIdentifier: string;
  isActive: (key: string) => boolean;
  toggleExample: (key: string, value: boolean) => void;
  bones?: BonesLayout[];
  skeletonContainerStyle?: ViewStyle;
  skeletonColors?: BoneColors;
  skeletonAnimation?: BoneAnimation;
};

export const RectangleExampleWithCode: FC<RectangleExampleWithCodeProps> = ({
  title,
  description,
  code,
  exampleIdentifier,
  bones,
  skeletonContainerStyle,
  skeletonColors,
  skeletonAnimation,
  isActive,
  toggleExample,
}) => (
  <>
    <Subtitle>{title}</Subtitle>
    <Paragraph>{description}</Paragraph>
    <CodeExample code={code} language={'typescript'} />
    <SkeletonExample
      loading={isActive(exampleIdentifier)}
      onValueChange={(value) => toggleExample(exampleIdentifier, value)}
      bones={bones}
      skeletonAnimation={skeletonAnimation}
      skeletonColors={skeletonColors}
      skeletonContainerStyle={skeletonContainerStyle}
    >
      <RectangleExample />
    </SkeletonExample>
  </>
);
