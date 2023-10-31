import CartPage from "pages/cart";
import CategoryPage from "pages/category";
import NotificationPage from "pages/notification";
import ProfilePage from "pages/profile";
import SearchPage from "pages/search";
import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { getSystemInfo } from "zmp-sdk";
import { Box } from "zmp-ui";

import SuccessPage from "../pages/success";

import { Navigation } from "./navigation";
import { ScrollRestoration } from "./scroll-restoration";
import HomePage from "../pages/index";

if (getSystemInfo().platform === "android") {
	const androidSafeTop = Math.round(
		(window as any)?.ZaloJavaScriptInterface?.getStatusBarHeight() / window.devicePixelRatio
	);
	document.body.style.setProperty("--zaui-safe-area-inset-top", `${androidSafeTop}px`);
}

export const Layout: FC = () => {
	return (
		<Box flex flexDirection="column" className="h-screen">
			<ScrollRestoration />
			<Box className="flex-1 flex flex-col overflow-hidden">
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/search" element={<SearchPage />}></Route>
					<Route path="/category" element={<CategoryPage />}></Route>
					<Route path="/notification" element={<NotificationPage />}></Route>
					<Route path="/cart" element={<CartPage />}></Route>
					<Route path="/profile" element={<ProfilePage />}></Route>
					<Route path="/success" element={<SuccessPage />}></Route>
				</Routes>
			</Box>
			<Navigation />
		</Box>
	);
};
