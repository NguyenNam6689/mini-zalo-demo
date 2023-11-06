import React, { FC, useMemo } from "react";
import { SelectedOptions } from "types/cart";
import { ProductField } from "types/product";
import { calcFinalPrice } from "utils/product";

import { DisplayPrice } from "./price";

export const FinalPrice: FC<{
	children: ProductField;
	options?: SelectedOptions;
}> = ({ children, options }) => {
	const finalPrice = useMemo(() => calcFinalPrice(children, options), [children, options]);
	return <DisplayPrice>{finalPrice}</DisplayPrice>;
};
