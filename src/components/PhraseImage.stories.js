import PhraseImage from './PhraseImage.js';
import { Image, Transformation } from 'cloudinary-react';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;

export default {
  title: 'components/PhraseImage',
  component: PhraseImage,
  subcomponents: { Transformation }
};

const Template = args => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  cloudName: {CLOUDNAME},
  publicId: 'sample',
  crop: "thumb",
  width: "100",
  height: "100",
  radius: "max"
};
