import { Image, ImageProps } from "@chakra-ui/react";
import glass from "../assets/glass-head.jpg";
import love from "../assets/love-head.jpeg";
import smile from "../assets/smiley-face.jpg";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: smile, alt: "good" },
    4: { src: love, alt: "best" },
    5: { src: glass, alt: "cool" },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
