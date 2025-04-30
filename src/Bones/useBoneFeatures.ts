import React, { Children, type ReactElement, type ReactNode } from 'react';
import type { BonesLayout } from './BonesFeatures';
import type { BoneStyle } from '../Bone/BoneFeatures';

const calculateBonesLayout = (
  bones: BonesLayout[],
  children?: ReactNode
): BonesLayout[] => {
  if (!children) {
    return bones;
  }

  return (
    Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null;
      }

      const element = child as ReactElement<{
        style?: BoneStyle;
        children?: ReactNode;
      }>;

      const layoutEntry: BonesLayout = {
        style: element.props?.style ?? {},
      };

      if (element.props?.children) {
        layoutEntry.children = calculateBonesLayout([], element.props.children);
      }

      return layoutEntry;
    })?.filter(Boolean) ?? []
  );
};

export const useBoneFeatures = (
  bones?: BonesLayout[],
  children?: ReactNode
) => {
  if (bones && bones.length > 0) {
    return bones;
  }

  return calculateBonesLayout([], children);
};
