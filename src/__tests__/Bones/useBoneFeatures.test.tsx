import React from 'react';
import { renderHook } from '@testing-library/react-native';
import type { BoneStyle } from '../../Bone/BoneFeatures';
import { useBoneFeatures } from '../../Bones/useBoneFeatures';
import { View } from 'react-native';

const Bone = ({
  style,
  children,
}: {
  style?: BoneStyle;
  children?: React.ReactNode;
}) => {
  return <View style={style}>{children}</View>;
};

describe('useBoneFeatures (React Native)', () => {
  it('returns given bones if provided', () => {
    const { result } = renderHook(() =>
      useBoneFeatures([{ style: { width: 100, height: 20 } }])
    );

    expect(result.current).toEqual([{ style: { width: 100, height: 20 } }]);
  });

  it('returns layout from children when bones is undefined', () => {
    const { result } = renderHook(() =>
      useBoneFeatures(
        undefined,
        <Bone style={{ width: 100, height: 20 }}>
          <Bone style={{ width: 50, height: 10 }} />
        </Bone>
      )
    );

    expect(result.current).toEqual([
      {
        style: { width: 100, height: 20 },
        children: [
          {
            style: { width: 50, height: 10 },
          },
        ],
      },
    ]);
  });

  it('returns empty array if no bones and no children are provided', () => {
    const { result } = renderHook(() => useBoneFeatures());

    expect(result.current).toEqual([]);
  });

  it('filters out invalid React nodes', () => {
    const children = (
      <Bone style={{ width: 100, height: 20 }}>
        <Bone style={{ width: 100, height: 20 }} />
        {'some string'}
        {null}
        {undefined}
      </Bone>
    );

    const { result } = renderHook(() => useBoneFeatures(undefined, children));

    expect(result.current).toEqual([
      {
        style: { width: 100, height: 20 },
        children: [
          {
            style: { width: 100, height: 20 },
          },
        ],
      },
    ]);
  });
});
