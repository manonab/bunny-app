import React, { FunctionComponent } from "react";

import Banane from "@/assets/svg/fruits/banana.svg";
import Grape from "@/assets/svg/fruits/grape.svg";
import Pear from "@/assets/svg/fruits/pear.svg";
import Cherry from "@/assets/svg/fruits/cherries.svg";
import Apple from "@/assets/svg/fruits/apple.svg";
import Apricot from "@/assets/svg/fruits/apricot.svg";
import Watermelon from "@/assets/svg/fruits/watermelon.svg";
import Strawberry from "@/assets/svg/fruits/strawberry.svg";
import Lychee from "@/assets/svg/fruits/lychee.svg";
import Peach from "@/assets/svg/fruits/peach.svg";
import Raspberry from "@/assets/svg/fruits/raspberry.svg";
import Orange from "@/assets/svg/fruits/orange.svg";
import Blueberry from "@/assets/svg/fruits/blueberry.svg";
import Melon from "@/assets/svg/fruits/melon.svg";
import Mango from "@/assets/svg/fruits/mango.svg";
import Kiwi from "@/assets/svg/fruits/kiwi.svg";
import Blackberry from "@/assets/svg/fruits/blackberry.svg";
import Papaya from "@/assets/svg/fruits/papaya.svg";
import Plum from "@/assets/svg/fruits/plum.svg";

interface Props {
    name: string;
    width?: number | "auto";
    height?: number | "auto";
    fill?: string;
    className?: string;
    url?: string;
}

const pickIcon = (name: any) => {
    switch (name) {
        case "Banana":
            return Banane;
        case "Grape":
            return Grape;
        case "Pear":
            return Pear;
        case "Cherry":
            return Cherry;
        case "Apple":
            return Apple;
        case "Watermelon":
            return Watermelon;
        case "Strawberry":
            return Strawberry;
        case "Raspberry":
            return Raspberry;
        case "Plum":
            return Plum;
        case "Peach":
            return Peach;
        case "Papaya":
            return Papaya;
        case "Orange":
            return Orange;
        case "Morus":
            return Apple;
        case "Melon":
            return Melon;
        case "Mango":
            return Mango;
        case "Lychee":
            return Lychee;
        case "Lingonberry":
            return Apple;
        case "Kiwi":
            return Kiwi;
        case "Gooseberry":
            return Apple;
        case "Carambola":
            return Apple;
        case "Blueberry":
            return Blueberry;
        case "Blackberry":
            return Blackberry;
        case "Apricot":
            return Apricot;
        default:
            throw new Error("No Svg found!");
    }
};

const Component: FunctionComponent<Props> = ({
    name,
    width,
    height,
    fill,
    className,
    url,
}: Props) => {
    const Svg = pickIcon(name);
    if (url) {
        return (
            <svg
                className={className}
                width={width}
                height={height}
                stroke={fill}
                fill={fill}
            >
                <image xlinkHref={url} width="100%" height="100%" />
            </svg>
        );
    }
    return (
        <Svg className={className} width={width} height={height} fill={fill} />
    );
};

export default Component;
