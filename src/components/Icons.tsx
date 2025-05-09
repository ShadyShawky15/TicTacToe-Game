import React from "react";
import type { PropsWithChildren } from "react";
import Icon from "react-native-vector-icons/FontAwesome"
type IconsProps = PropsWithChildren<{
    name: string;
}>

export const Icons = ({ name }: IconsProps) => {
    switch (name) {
        case "circle":
            return <Icon style={{ color: "white" }} name="circle-thin" size={38} color={"F7CD2E"} />
        case "cross":
            return <Icon style={{ color: "white" }} name="times" size={38} color={"38CC77"} />
        default:
            return <Icon name="pencil" size={38} color={"0D0D0D"} />
    }
}