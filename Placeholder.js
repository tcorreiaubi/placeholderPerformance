import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const borderRadius = 2;
const backgroundColor = 'rgba(255, 255, 255, 0.8)';

export const Placeholder = () => {
  return (
    <SkeletonPlaceholder backgroundColor={backgroundColor}>
      <SkeletonPlaceholder.Item
        height={28}
        marginBottom={20}
        borderRadius={borderRadius}
        width={'50%'}
      />
      <SkeletonPlaceholder.Item
        height={28}
        borderRadius={borderRadius}
        marginBottom={20}
        width={'80%'}
      />
      <SkeletonPlaceholder.Item
        height={28}
        borderRadius={borderRadius}
        marginBottom={52}
        width={'80%'}
      />
      <SkeletonPlaceholder.Item
        height={10}
        borderRadius={borderRadius}
        marginBottom={12}
        width={'100%'}
      />
      <SkeletonPlaceholder.Item
        height={10}
        borderRadius={borderRadius}
        marginBottom={12}
        width={'95%'}
      />
      <SkeletonPlaceholder.Item
        height={10}
        borderRadius={borderRadius}
        marginBottom={12}
        width={'95%'}
      />
      <SkeletonPlaceholder.Item
        height={10}
        borderRadius={borderRadius}
        marginBottom={12}
        width={'100%'}
      />
      <SkeletonPlaceholder.Item
        height={10}
        borderRadius={borderRadius}
        marginBottom={12}
        width={'100%'}
      />
      <SkeletonPlaceholder.Item
        height={10}
        borderRadius={borderRadius}
        marginBottom={26}
        width={'100%'}
      />
      <SkeletonPlaceholder.Item
        height={28}
        borderRadius={borderRadius}
        marginBottom={46}
        width={'50%'}
      />
    </SkeletonPlaceholder>
  );
};
