import React, { FunctionComponent } from "react";

import Banana from "@/assets/svg/fruits/banana.svg";
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
import Pinneapple from "@/assets/svg/fruits/pinneapple.svg";
import Basil from "@/assets/svg/vegetables/basil.svg";
import Beet from "@/assets/svg/vegetables/beet.svg";
import Carrot from "@/assets/svg/vegetables/carrot.svg";
import Radish from "@/assets/svg/vegetables/radish.svg";
import Broccoli from "@/assets/svg/vegetables/broccoli.svg";
import Kale from "@/assets/svg/vegetables/kale.svg";
import Cauliflower from "@/assets/svg/vegetables/cauliflower.svg";
import BrusselsSprouts from "@/assets/svg/vegetables/brussels-sprouts.svg";
import Kohlrabi from "@/assets/svg/vegetables/kohlrabi.svg";
import Lettuce from "@/assets/svg/vegetables/lettuce.svg";
import Celery from "@/assets/svg/vegetables/celery.svg";
import Herb from "@/assets/svg/vegetables/herb.svg";
import Tomato from "@/assets/svg/vegetables/tomato.svg";
import Zucchini from "@/assets/svg/vegetables/zucchini.svg";

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
        case "Apple":
            return Apple;
        case "Apricot":
            return Apricot;
        case "Banana":
            return Banana;
        case "Basil":
            return Basil;
        case "Beet":
            return Beet;
        case "Blackberry":
            return Blackberry;
        case "Blueberry":
            return Blueberry;
        case "Broccoli":
            return Broccoli;
        case "Brussels Sprouts":
            return BrusselsSprouts;
        case "Carrot":
            return Carrot;
        case "Carambola":
            return Apple;
        case "Cauliflower":
            return Cauliflower;
        case "Celery":
            return Celery;
        case "Chard":
            return Herb;
        case "Cherry":
            return Cherry;
        case "Coriander":
            return Herb;
        case "Dandelion":
            return Herb;
        case "Endive":
            return Herb;
        case "Grape":
            return Grape;
        case "Gooseberry":
            return Apple;
        case "Kale":
            return Kale;
        case "Kiwi":
            return Kiwi;
        case "Kohlrabi":
            return Kohlrabi;
        case "Lettuce":
            return Lettuce;
        case "Lingonberry":
            return Apple;
        case "Lychee":
            return Lychee;
        case "Mango":
            return Mango;
        case "Melon":
            return Melon;
        case "Mint":
            return Herb;
        case "Morus":
            return Apple;
        case "Orange":
            return Orange;
        case "Oregano":
            return Herb;
        case "Papaya":
            return Papaya;
        case "Parsip":
            return Herb;
        case "Parsley":
            return Herb;
        case "Peach":
            return Peach;
        case "Pear":
            return Pear;
        case "Pinneapple":
            return Pinneapple;
        case "Plum":
            return Plum;
        case "Radish":
            return Radish;
        case "Raspberry":
            return Raspberry;
        case "Rosemary":
            return Herb;
        case "Spinach":
            return Kale;
        case "Strawberry":
            return Strawberry;
        case "Squash Blossoms":
            return Herb;
        case "Thym":
            return Herb;
        case "Tomato":
            return Tomato;
        case "Turnip":
            return Kale;
        case "Watercress":
            return Kale;
        case "Watermelon":
            return Watermelon;
        case "Zucchini":
            return Zucchini;
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
