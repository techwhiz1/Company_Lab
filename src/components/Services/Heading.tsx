// COMPONENTS
import { FC } from "react";

// COMPONENTS
import MainHeading from "../MainHeading";

const Heading: FC<Props> = ({ title, description, image }) => {
    return (
        <div className="mb-[2.5rem]">
            <MainHeading text={title} />
            <p className="text-[#F0F0F0] font-extralight text-[1.5rem] text-center mb-[2.5rem]">{description}</p>
            {image && <img src={image} />}
        </div>
    );
};

export default Heading;

// TYPES

interface Props {
    title: string;
    description: string;
    image?: string;
}
