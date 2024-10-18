import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card padding={1} marginY="10px">
      <HStack>
        <Skeleton height="32px" width="32px" />
        <CardBody>
          <SkeletonText noOfLines={1} />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default GenreSkeleton;
